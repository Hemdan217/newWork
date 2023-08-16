document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      chrome.runtime.sendMessage(
        {
          action: "checkThisUrl",
          payload: link.href,
        },
        async (res) => {
          console.log(res);
          if (res?.predict == "NORMAL") {
            link.style.padding = "2px";
            // link.style.backgroundColor = "green";
            location.href = link.href;
          } else if (res?.predict == "MALICIOUS") {
            // link.style.backgroundColor = "red";
            createNewDiv();
          }
          await chrome.runtime.sendMessage({
            action: "changeIconCurrent",

            prediction: res?.predict,
          });
        }
      );
    });
  });
});

// Create the spinner element

chrome.runtime.sendMessage(
  {
    action: "checkThisUrl2",
    payload: document.baseURI,
  },
  async (res) => {
    console.log(res);
    if (res?.predict == "NORMAL") {
    } else if (res?.predict == "MALICIOUS") {
      window.stop();

      // link.style.backgroundColor = "red";
      createNewDiv();
    }

    await chrome.runtime.sendMessage({
      action: "changeIconCurrent",

      prediction: res?.predict,
    });
  }
);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  if (request.prediction == "NORMAL") {
  } else if (request.prediction == "MALICIOUS") {
    setTimeout(() => {
      createNewDiv();
    }, 350);
  }
  await chrome.runtime.sendMessage({
    action: "changeIcon",
    id: request.id,
    prediction: request.prediction,
  });
});

function createNewDiv() {
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
}
