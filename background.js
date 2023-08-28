var token;
let blockAll = false;
let refresh_token;
// This event runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action == "start") {
    console.log(request.payload);

    token = request.payload;
  } else if (request.action == "checkThisUrl") {
    fetch("http://178.170.48.29:5000/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (res) {
        console.log(request.payload);
        return res.json();
      })
      .then(function (data) {
        fetch("http://178.170.48.29:5000/prediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.access_token,
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
    fetch("http://178.170.48.29:5000/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (res) {
        console.log(request.payload);
        return res.json();
      })
      .then(function (data) {
        fetch("http://178.170.48.29:5000/prediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.access_token,
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
            sendResponse(data);
          })
          .catch(function (err) {
            console.log(err);
            sendResponse({ error: "An error occurred" });
          });
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
// chrome.webRequest.onBeforeRequest.addListener(
//   function () {
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"], tabId: -1 },
//   ["blocking"]
// );
// chrome.webRequest.onBeforeSendHeaders.addListener(
//   function () {
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"], tabId: -1 },
//   ["blocking"]
// );

chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
  predicted = false;
  if (
    details.frameId == 0 &&
    !(
      details.url.includes("chrome-extension:") ||
      details.url.includes("chrome:") ||
      details.url.includes("about:blank?checking")
    )
  ) {
    originalUrl = details.url;
    tabId = details.tabId;
    fetch("http://178.170.48.29:5000/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        fetch("http://178.170.48.29:5000/prediction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + data.access_token,
          },
          body: JSON.stringify({
            url: originalUrl,
          }),
        })
          .then((response) => {
            // Check if the response was successful
            if (response.ok) {
              response.json().then((data) => {
                changeIcon(data?.predict, details.tabId);

                if (data?.predict == "NORMAL") {
                  chrome.tabs.sendMessage(details.tabId, {
                    prediction: data?.predict,
                    id: details.tabId,
                  });
                  // chrome.tabs.update(details.tabId, {
                  //   url: `${originalUrl}?checked`,
                  // });
                  changeIcon(data?.predict, details.tabId);
                } else if (data?.predict == "MALICIOUS") {
                  chrome.tabs.update(details.tabId, {
                    url: `index.html`,
                  });
                  // chrome.tabs.sendMessage(details.tabId, {
                  //   prediction: data?.predict,
                  //   id: details.tabId,
                  // });
                  changeIcon(data?.predict, details.tabId);
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
      })
      .catch(function (err) {
        console.log(err);
      });
  } else if (
    details.frameId == 0 &&
    details.url.includes(`about:blank?checking`)
  ) {
  }
});

function handleBeforeRequest(details) {
  console.log(details.url);
  if (details.url.includes("?checked")) {
    const redirectUrl = details.url.replace(/\?checked\b/, "");
    return { redirectUrl };
  } else if (details.url.includes(`${chrome.runtime.id}/index.html`)) {
    setTimeout(() => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        changeIcon("MALICIOUS", tabs[0].id);
      });
    }, 300);
  } else if (
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:") ||
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url == "http://178.170.48.29:5000/refresh" ||
    details.url == "http://178.170.48.29:5000/token" ||
    details.url == "ws://localhost:1815/"
  ) {
    return { cancel: false };
  } else if (details.tabId === chrome.runtime.id) {
    return { cancel: false }; // Continue with the request
  } else {
    // Delay the request by 3 seconds
    var delayInMilliseconds = 250; // 3 seconds
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
    details.url == "http://178.170.48.29:5000/refresh" ||
    details.url == "http://178.170.48.29:5000/token" ||
    details.url == "ws://localhost:1815/"
  ) {
    return { cancel: false };
  } else if (details.tabId === chrome.runtime.id) {
    return { cancel: false }; // Continue with the request
  } else {
    // Delay the request by 3 seconds
    var delayInMilliseconds = 250; // 3 seconds
    var startTime = new Date().getTime();
    var endTime = startTime + delayInMilliseconds;

    // Wait until the specified delay has passed
    while (new Date().getTime() < endTime) {
      // Do nothing
    }
  }
}

function changeIcon(prediction, currentTab) {
  if (prediction == "NORMAL" || prediction == "TRUSTED") {
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
  } else if (prediction == "NORMAL" || prediction == "UNTRUSTED") {
    const code = `
                            var div = document.createElement("div");
                            div.style.backgroundColor = "red";
                            div.style.padding = "20px";
                            div.style.position = "fixed";
                            div.style.top = "0";
                            div.style.margin = "auto";
                            div.style.direction = "ltr";
                            div.style.zIndex = "1000";
                            div.style.width = "100%";
                            div.style.color = "white";
                            div.style.textAlign = "center";
                            div.style.fontWeight = "bold";
                            div.innerHTML = "WARNING - Potential Malicious page!";

                            document.body.appendChild(div);
                          `;

    // Execute the code in the specific tab

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
