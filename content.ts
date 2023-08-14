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
const spinner = document.createElement("div");

// Apply CSS styles to the spinner
spinner.style.position = "fixed";
spinner.style.top = "50%";
spinner.style.left = "50%";
spinner.style.transform = "translate(-50%, -50%)";
spinner.style.width = "40px";
spinner.style.height = "40px";
spinner.style.borderRadius = "50%";
spinner.style.border = "4px solid #f3f3f3";
spinner.style.borderTop = "4px solid #3498db";
spinner.style.animation = "spin 2s linear infinite";

// Add the spinner to the document body
document.body.appendChild(spinner);
chrome.runtime.sendMessage(
  {
    action: "checkThisUrl2",
    payload: document.baseURI,
  },
  async (res) => {
    console.log(res);
    if (res?.predict == "NORMAL") {
      spinner.remove();
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
    window.location.reload();
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
