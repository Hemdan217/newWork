// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll("a").forEach((link) => {
//     link.addEventListener("click", (event) => {
//       event.preventDefault();
//     });
//   });
//   console.log("HIDhidhdj");
// });
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    chrome.runtime.sendMessage(
      {
        action: "checkThisUrl",
        payload: link.href,
      },
      (res) => {
        console.log(res);
        if (res?.predict === "NORMAL") {
          link.style.padding = "2px";
          link.style.backgroundColor = "green";
          location.href = link.href;
        } else if (res?.predict === "MALICIOUS") {
          link.style.backgroundColor = "red";
          createNewDiv();
        }
      }
    );
  });
});
// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Log the URL details
  // console.log("URL:", request.url);
  // Store the current URL
  console.log("prediction:", request.prediction);
  if (request.prediction === "MALICIOUS") {
    createNewDiv();
  }
});
console.log("HIDhidhdj");
function createNewDiv() {
  let div = document.createElement("div");
  div.style.backgroundColor = "red";
  div.style.padding = "20px";
  div.style.position = "fixed"; // Update position to fixed
  div.style.top = "0"; // Add top position to 0
  div.style.margin = "auto"; // Add top position to 0
  div.style.direction = "ltr"; // Add top position to 0
  div.style.zIndex = "1000"; // Add top position to 0
  div.style.width = "100%"; // Set the width to 100% to cover the entire page
  div.style.color = "white"; // Set the width to 100% to cover the entire page
  div.style.textAlign = "center"; // Set the width to 100% to cover the entire page
  div.style.fontWeight = "bold"; // Set the width to 100% to cover the entire page
  div.innerHTML = `
  WARNING - Potential Malicious page!
`;

  document.body.appendChild(div);
}
