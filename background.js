let token;

// This function runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === "start") {
    // createBumble(number);
    console.log(request.payload);
    token = request.payload;
  } else if (request.action === "checkThisUrl") {
    const res = await fetch("http://178.170.48.29:5000/prediction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        url: request.payload,
      }),
    });
    console.log(request.payload);
    let data = await res.json();
    if (data?.predict === "NORMAL") {
      await chrome.action.setIcon({
        path: {
          16: "./../../assets/normal/icon16.plasmo.6c567d50.png",
          32: "./../../assets/normal/icon32.plasmo.76b92899.png",
          48: "./../../assets/normal/icon48.plasmo.aced7582.png",
          64: "./../../assets/normal/icon64.plasmo.8bb5e6e0.png",
          128: "./../../assets/normal/icon128.plasmo.3c1ed2d2.png",
        },
      });
    } else if (data?.predict === "MALICIOUS") {
      // Assuming you have an image file named "MALICIOUS.png" in the root directory of your extension

      // Set the image file as the extension icon
      await chrome.action.setIcon({
        path: {
          16: "./../../assets/icon16.plasmo.6c567d50.png",
          32: "./../../assets/icon32.plasmo.76b92899.png",
          48: "./../../assets/icon48.plasmo.aced7582.png",
          64: "./../../assets/icon64.plasmo.8bb5e6e0.png",
          128: "./../../assets/icon128.plasmo.3c1ed2d2.png",
        },
      });
    } else {
      await chrome.action.setIcon({
        path: {
          16: "./../../icon16.plasmo.9f44d99c.png",
          32: "./../../icon32.plasmo.83dbbbab.png",
          48: "./../../icon48.plasmo.a78c509e.png",
          64: "./../../icon64.plasmo.15206795.png",
          128: "./../../icon128.plasmo.c11f39af.pnp",
        },
      });
    }
    sendResponse(data);
    console.log(data);
    console.log(res);
  }
});
