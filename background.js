var token;
let blockAll = false;

// This event runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.action === "start") {
    console.log(request.payload);

    token = request.payload;
  } else if (request.action === "checkThisUrl") {
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
async function checkUrl(details) {
  let prediction;
  if (
    chrome.webRequest.onBeforeRequest.hasListener(blockRequests) ||
    chrome.webRequest.onBeforeRequest.hasListener(allowRequests)
  ) {
    chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
    chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
  }
  if (
    details.type === "main_frame" &&
    details.frameId === 0 &&
    !(
      details.url.includes("chrome-extension:") ||
      details.url.includes("chrome:")
    )
  ) {
    let url = details.url;

    prediction = await predict(url, details.tabId);
    console.log(url, "onBeforeRequest 1");
    console.log(prediction, "prediction");
    changeIcon(prediction, details.tabId);
    return { cancel: prediction === "MALICIOUS" };
  }
  return { cancel: prediction === "MALICIOUS" };
}
chrome.webRequest.onBeforeRequest.addListener(
  checkUrl,

  { urls: ["<all_urls>"] },
  ["blocking"]
);
function allowRequests(details) {
  return { cancel: false };
}
function blockRequests(details) {
  if (
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:")
  ) {
    return { cancel: false };
  } else {
    return { cancel: true };
  }
}
chrome.webNavigation.onBeforeNavigate.addListener(async function (details) {
  if (
    details.frameId === 0 &&
    !(
      details.url.includes("chrome-extension:") ||
      details.url.includes("chrome:")
    )
  ) {
    let url = details.url;

    const prediction = await predict(url, details.tabId);
    console.log(url, "onBeforeNavigate");
    console.log(prediction, "prediction");
    changeIcon(prediction, details.tabId);
    if (prediction == "MALICIOUS") {
      return { cancel: true };
    }
  }
  return;
});
async function predict(url, currentTab) {
  try {
    const res = await fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        url: url,
      }),
    });
    const data = await res.json();
    const prediction = data?.predict;
    if (prediction === "NORMAL") {
      chrome.webRequest.onBeforeRequest.addListener(
        allowRequests,
        { urls: ["<all_urls>"], tabId: currentTab },
        ["blocking"]
      );
    } else if (prediction === "MALICIOUS") {
      chrome.webRequest.onBeforeRequest.addListener(
        blockRequests,
        { urls: ["<all_urls>"], tabId: currentTab },
        ["blocking"]
      );
    }
    chrome.tabs.sendMessage(currentTab, { prediction });
    return data?.predict;
  } catch (error) {
    console.error(error);
    return null;
  }
}
function changeIcon(prediction, currentTab) {
  if (prediction === "NORMAL") {
    chrome.webRequest.onBeforeRequest.addListener(
      allowRequests,
      { urls: ["<all_urls>"], tabId: currentTab },
      ["blocking"]
    );

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
  } else if (prediction === "MALICIOUS") {
    chrome.webRequest.onBeforeRequest.addListener(
      blockRequests,
      { urls: ["<all_urls>"], tabId: currentTab },
      ["blocking"]
    );
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
  } else {
    chrome.browserAction.setIcon({
      tabId: currentTab,
      path: {
        16: "./../../assets/no/icon16.plasmo.2577fc03.png",
        32: "./../../assets/no/icon32.plasmo.d583dc1e.png",
        48: "./../../assets/no/icon48.plasmo.e0fcfb1d.png",
        64: "./../../assets/no/icon64.plasmo.e6259081.png",
        128: "./../../assets/no/icon128.plasmo.96a1ede9.png",
      },
    });
  }
  chrome.tabs.sendMessage(currentTab, { prediction });
}

// In your background script

// Add the listener for all URLs
// chrome.webNavigation.onCompleted.addListener(function (details) {
//   console.log(details, "Removing the listeners");
//   chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
//   chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
// }, {});
function checkIt(details) {
  // Step 4: Implement your logic to allow or block requests
  // For example, block all requests:
  if (
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:")
  ) {
    return { cancel: false };
  } else {
    return { cancel: true };
  }
}

// chrome.webRequest.onBeforeRequest.addListener(
//   async function (details) {
//     if (details.type === "main_frame" && details.frameId === 0) {
//       let url = details.url;
//       const prediction = await predict(url);
//       console.log(url, "onBeforeRequest");
//       console.log(prediction, "onBeforeRequest");

//       chrome.runtime.sendMessage({ url, prediction });
//       if (prediction === "MALICIOUS") {
//         chrome.webRequest.onBeforeRequest.removeListener(allowRequest);
//         chrome.webRequest.onBeforeRequest.addListener(
//           blockRequest,
//           { urls: ["<all_urls>"] },
//           ["blocking"]
//         );
//         return { cancel: true };
//       } else {
//         chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
//         chrome.webRequest.onBeforeRequest.addListener(
//           allowRequest,
//           { urls: ["<all_urls>"] },
//           ["blocking"]
//         );
//       }
//     }
//     console.log(blockAll);
//     if (blockAll == true) {
//       return { cancel: true };
//     }
//     return { cancel: false };
//   },
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );
