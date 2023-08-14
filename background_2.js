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
// chrome.webNavigation.onBeforeNavigate.addListener(async function (details) {
//   console.log(details.url);
//   originalUrl = details.url;

//   predicted = false;
//   if (
//     details.frameId == 0 &&
//     !(
//       details.url.includes("chrome-extension:") ||
//       details.url.includes("chrome:")
//     )
//   ) {
//     originalUrl = details.url;
//     tabId = details.tabId;
//     const prediction = await predict(originalUrl, details.tabId);

//     // handlePendingRequests(pendingRequests);
//     pendingRequests = [];
//     console.log(originalUrl, "onBeforeNavigate");
//     console.log(prediction, "prediction");
//     changeIcon(prediction, details.tabId);
//     await chrome.tabs.sendMessage(details.tabId, {
//       prediction: prediction,
//       id: details.tabId,
//     });
//   }
// });

async function handleBeforeRequest(details) {
  console.log(details.tabId, details.url);
  if (
    details.url.includes("chrome-extension:") ||
    details.url.includes("chrome:") ||
    details.url == "http://178.170.48.29:5000/prediction" ||
    details.url == "http://178.170.48.29:5000/authenticate" ||
    details.url == "ws://localhost:1815/"
  ) {
    return { cancel: false };
  } else {
    let i = 1;
    // Wait until the specified delay has passed
    const timer = setInterval(() => {
      i += 1;
      if (i == 3000) {
        clearInterval(timer);
      }
    });
    const res = await fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        url: details.url,
      }),
    });
    const data = await res.json();
    const prediction = data?.predict;
    if (prediction == "NORMAL") {
      blockAllRequests = false;
    } else if (prediction == "MALICIOUS") {
      blockAllRequests = true;
    }
    changeIcon(prediction, details.tabId);

    // Delay the request by 3 seconds
    var delayInMilliseconds = 3000; // 3 seconds
    var startTime = new Date().getTime();
    var endTime = startTime + delayInMilliseconds;
  }
}
chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return { cancel: false };
  },
  { urls: ["<all_urls>"], tabId: -1 },
  ["blocking"]
);
chrome.webRequest.onBeforeRequest.addListener(
  handleBeforeRequest,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);

// async function checkURL(details) {
//   if (!predicted) {
//     const prediction = await predict(originalUrl);
//   } else {
//     return { cancel: blockAllRequests };
//   }
// }

// function checkURL(details) {
//   console.log(details.url);
//   if (
//     details.url.includes("chrome-extension:") ||
//     details.url.includes("chrome:") ||
//     details.url == "http://178.170.48.29:5000/prediction" ||
//     details.url == "http://178.170.48.29:5000/authenticate" ||
//     details.url == "ws://localhost:1815/"
//   ) {
//     return { cancel: false };
//   }
//   return { cancel: true };
// }
// function blocking(details) {
//   while (!predicted) {}
//   if (
//     details.url.includes("chrome-extension:") ||
//     details.url.includes("chrome:") ||
//     details.url == "http://178.170.48.29:5000/prediction" ||
//     details.url == "http://178.170.48.29:5000/authenticate" ||
//     details.url == "ws://localhost:1815/"
//   ) {
//     return { cancel: false };
//   }
//   {
//     return { cancel: blockAllRequests };
//   }
// }
chrome.webRequest.onBeforeSendHeaders.addListener(
  blockRequests,
  { urls: ["<all_urls>"], types: ["main_frame"] },
  ["blocking"]
);
// Function to handle the onBeforeRequest event

// Register the onBeforeRequest event listener

// function allowRequests(details) {
//   return { cancel: false };
// }

async function blockRequests(details) {
  console.log("after prediction blocked", blockAllRequests, details.url);

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
  }
  return { cancel: blockAllRequests };
}

// }

// async function predict(url, currentTab) {
//   try {
//     const res = await fetch("http://178.170.48.29:5000/prediction", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//       body: JSON.stringify({
//         url: url,
//       }),
//     });
//     const data = await res.json();
//     const prediction = data?.predict;
//     if (prediction == "NORMAL") {
//       blockAllRequests = false;
//     } else if (prediction == "MALICIOUS") {
//       blockAllRequests = true;
//     }
//     console.log(pendingRequests);
//     predicted = true;
//     return prediction;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }
// function handlePendingRequests(){
//  for (const request of pendingRequests) {
//         chrome.webRequest.handlerBehaviorChanged(); // Reset the blocking state
//         request.cancel();
//       }

// }
async function changeIcon(prediction, currentTab) {
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
  //  else {
  //   chrome.browserAction.setIcon({
  //     tabId: currentTab,
  //     path: {
  //       16: "./../../assets/no/icon16.plasmo.2577fc03.png",
  //       32: "./../../assets/no/icon32.plasmo.d583dc1e.png",
  //       48: "./../../assets/no/icon48.plasmo.e0fcfb1d.png",
  //       64: "./../../assets/no/icon64.plasmo.e6259081.png",
  //       128: "./../../assets/no/icon128.plasmo.96a1ede9.png",
  //     },
  //   });
  // }
}

// Background script

// Event listener for completed requests
// chrome.webRequest.onCompleted.addListener(
//   function (details) {
//     if (details.type == "main_frame" && details.frameId == 0) {
//       console.log("removing");
//       chrome.webRequest.onBeforeRequest.addListener(
//         checkURL,
//         { urls: ["<all_urls>"] },
//         ["blocking"]
//       );
//       chrome.webRequest.onBeforeRequest.removeListener(blockRequests);
//       chrome.webRequest.onBeforeRequest.removeListener(allowRequests);
//     }
//   },
//   { urls: ["<all_urls>"] }
// );
// In your background script

// Add the listener for all URLs
// chrome.webNavigation.onCompleted.addListener(async function (details) {
//   if (
//     details.frameId == 0 &&
//     !(
//       details.url.includes("chrome-extension:") ||
//       details.url.includes("chrome:")
//     )
//   ) {
//     const url = details.url;
//     const prediction = await predict(url, details.tabId, true);

//     console.log(url, "onBeforeNavigate");
//     console.log(prediction, "prediction");
//     changeIcon(prediction, details.tabId);
//   }
// }, {});
// function checkIt(details) {
//   // Step 4: Implement your logic to allow or block requests
//   // For example, block all requests:
//   if (
//     details.url == "http://178.170.48.29:5000/prediction" ||
//     details.url.includes("chrome-extension:") ||
//     details.url.includes("chrome:")
//   ) {
//     return { cancel: false };
//   } else {
//     return { cancel: true };
//   }
// }

// chrome.webRequest.onBeforeRequest.addListener(
//   async function (details) {
//     if (details.type == "main_frame" && details.frameId == 0) {
//       let url = details.url;
//       const prediction = await predict(url);
//       console.log(url, "onBeforeRequest");
//       console.log(prediction, "onBeforeRequest");

//       chrome.runtime.sendMessage({ url, prediction });
//       if (prediction == "MALICIOUS") {
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
