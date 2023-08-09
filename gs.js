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
    const url = request.payload;
    const prediction = await predict(request.payload);
    console.log(request.payload, "onBeforeNavigate");
    console.log(prediction, "prediction");

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { url, prediction });
    });
  }
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

    if (data?.predict === "NORMAL") {
      blockAll = false;
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
    } else if (data?.predict === "MALICIOUS") {
      blockAll = false;
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

    return data?.predict;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// chrome.webRequest.onBeforeRequest.addListener(
//   allowRequest,
//   { urls: ["<all_urls>"] },
//   ["blocking"]
// );

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
chrome.webRequest.onBeforeRequest.addListener(
  async function (details) {
    let block = false;
    if (
      details.type === "main_frame" &&
      details.frameId === 0 &&
      !(
        details.url.includes("chrome-extension:") ||
        details.url.includes("chrome:")
      )
    ) {
      let url = details.url;

      const prediction = await predict(url, details.tabId);
      console.log(url, "onBeforeRequest");
      console.log(prediction, "prediction");
      if (prediction === "MALICIOUS") {
        block = true;
        return { cancel: true };
      }

      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { url, prediction });
      });
    }
    if (block) {
      return { cancel: true };
    }
  },

  { urls: ["<all_urls>"] },
  ["blocking"]
);
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

    // Register the event listener for onBeforeRequest
    const onBeforeRequestListener = function (requestDetails) {
      // Implement your logic to allow or block requests
      // For example, block all requests:
      if (
        requestDetails.url === "http://178.170.48.29:5000/prediction" ||
        requestDetails.url.includes("chrome-extension:") ||
        requestDetails.url.includes("chrome:")
      ) {
        return { cancel: false };
      } else {
        return { cancel: prediction === "MALICIOUS" };
      }
    };

    // Add the event listener for onBeforeRequest
    chrome.webRequest.onBeforeRequest.addListener(
      onBeforeRequestListener,
      { urls: ["<all_urls>"], tabId: details.tabId },
      ["blocking"]
    );
    setTimeout(function () {
      chrome.webRequest.onBeforeRequest.removeListener(onBeforeRequestListener);
    }, 3000); // Adjust the delay as needed
    // Send a message to the active tab with the URL and prediction
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { url, prediction });
    });

    // Clean up the event listener for onBeforeRequest after a delay
  }

  return;
});

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
