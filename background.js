var token;
let blockAll = false;

// This event runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action == "start") {
    console.log(request.payload);

    token = request.payload;
    chrome.runtime.sendMessage({ token });
  } else if (request.action == "checkThisUrl") {
    console.log(request.action);
    fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        url: request.payload,
      }),
    })
      .then(function (res) {
        console.log(request.payload);
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            changeIcon(data.predict, tabs[0].id);
          }
        );

        sendResponse(data);
      })
      .catch(function (err) {
        console.log(err);
        sendResponse({ error: "An error occurred" });
      });

    // Return true to indicate that the response will be sent asynchronously
    return true;
  } else if (request.action == "changeIcon") {
    changeIcon(request.prediction, request.id);
  } else if (request.action == "changeIconCurrent") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      changeIcon(request.prediction, tabs[0].id);
    });
  } else if (request.action == "checkThisUrl2") {
    console.log(request.action);
    fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        url: request.payload,
      }),
    })
      .then(function (res) {
        console.log(request.payload);
        return res.json();
      })
      .then(function (data) {
        console.log(data);
        // chrome.tabs.query(
        //   { active: true, currentWindow: true },
        //   function (tabs) {
        //     changeIcon(data.predict, tabs[0].id);
        //   }
        // );

        sendResponse(data);
      })
      .catch(function (err) {
        console.log(err);
        sendResponse({ error: "An error occurred" });
      });

    // Return true to indicate that the response will be sent asynchronously
    return true;
  }
});

let blockAllRequests = true;
let predicted = false;
let tabId;
let originalUrl;
let pendingRequests = [];
let blockedUrls = [];
chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return { cancel: false };
  },
  { urls: ["<all_urls>"], tabId: -1 },
  ["blocking"]
);
chrome.webRequest.onBeforeSendHeaders.addListener(
  function () {
    return { cancel: false };
  },
  { urls: ["<all_urls>"], tabId: -1 },
  ["blocking"]
);

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  console.log(details.url);

  predicted = false;
  if (
    details.frameId == 0 &&
    !(
      details.url.includes("chrome-extension:") ||
      details.url.includes("chrome:") ||
      details.url.includes("index.html?checkUrl=")
    )
  ) {
    if (
      originalUrl !== details.url &&
      !details.url.includes("index.html?checkUrl=")
    ) {
      originalUrl = details.url;
      tabId = details.tabId;

      chrome.tabs.update(details.tabId, {
        url: `https:chrome-extension/${chrome.runtime.id}/index.htm?checkUrl=${originalUrl}`,
      });
    }
  } else if (
    details.frameId == 0 &&
    details.url.includes("index.html?checkUrl=")
  ) {
    let checkingURl = details.url.split("=")[1];
    fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        url: checkingURl,
      }),
    })
      .then((response) => {
        // Check if the response was successful
        if (response.ok) {
          response.json().then((data) => {
            changeIcon(data?.predict, details.tabId);
            chrome.tabs.sendMessage(details.tabId, {
              prediction: data?.predict,
              id: details.tabId,
            });
            if (data?.predict == "NORMAL") {
              chrome.tabs.update(details.tabId, {
                url: `${checkingURl}`,
              });
              changeIcon(data?.predict, details.tabId);
            } else if (data?.predict == "MALICIOUS") {
              chrome.tabs.sendMessage(details.tabId, {
                prediction: data?.predict,
                id: details.tabId,
              });
            }
          });
        } else {
          chrome.tabs.update(details.tabId, { url: "error.html" });
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        // Cancel the navigation
        chrome.tabs.update(details.tabId, { url: "error.html" });
      });
  } else if (
    details.frameId == 0 &&
    (details.url.includes("chrome-extension:") ||
      details.url.includes("chrome:") ||
      details.url == "https://google.com/")
  ) {
    originalUrl = details.url;
  }
});

function handleBeforeRequest(details) {
  if (
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:") ||
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url == "http://178.170.48.29:5000/authenticate" ||
    details.url == "ws://localhost:1815/"
  ) {
    return { cancel: false };
  } else if (details.tabId === chrome.runtime.id) {
    return { cancel: false }; // Continue with the request
  } else {
    // Delay the request by 3 seconds
    var delayInMilliseconds = 500; // 3 seconds
    var startTime = new Date().getTime();
    var endTime = startTime + delayInMilliseconds;

    // Wait until the specified delay has passed
    while (new Date().getTime() < endTime) {
      // Do nothing
    }
  }
}

chrome.webRequest.onBeforeRequest.addListener(
  handleBeforeRequest,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  blockRequests,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);

function blockRequests(details) {
  if (
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:") ||
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url == "http://178.170.48.29:5000/authenticate" ||
    details.url == "ws://localhost:1815/"
  ) {
    return { cancel: false };
  } else if (details.tabId === chrome.runtime.id) {
    return { cancel: false }; // Continue with the request
  } else {
    // Delay the request by 3 seconds
    var delayInMilliseconds = 500; // 3 seconds
    var startTime = new Date().getTime();
    var endTime = startTime + delayInMilliseconds;

    // Wait until the specified delay has passed
    while (new Date().getTime() < endTime) {
      // Do nothing
    }
  }
}

function changeIcon(prediction, currentTab) {
  if (prediction == "NORMAL") {
    chrome.browserAction.setIcon({
      tabId: currentTab,
      path: {
        16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
        32: "./../../assets/normal/icon32.plasmo.76b92899.png",
        48: "./../../assets/normal/icon48.plasmo.aced7582.png",
        64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
        128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png",
      },
    });
  } else if (prediction == "MALICIOUS") {
    chrome.browserAction.setIcon({
      tabId: currentTab,
      path: {
        16: "./../../assets/icon16.plasmo.6c567d50.png",
        32: "./../../assets/icon32.plasmo.76b92899.png",
        48: "./../../assets/icon48.plasmo.aced7582.png",
        64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
        128: "./../../assets/icon128.plasmo.3c1ed2d2.png",
      },
    });
  }
}
