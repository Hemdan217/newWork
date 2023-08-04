document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
  console.log("HIDhidhdj");
});
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", async (event) => {
    event.preventDefault();
    const res = await chrome.runtime.sendMessage({
      action: "checkThisUrl",
      payload: link.href,
    });
    console.log(res);
    if (res?.predict == "NORMAL") {
      link.style.padding = "2px";
      link.style.backgroundColor = "green";
      location.href = link.href;
      return;
    } else if (res?.predict == "MALICIOUS") {
      link.style.backgroundColor = "red";
      createNewDiv();
    }
  });
});
console.log("HIDhidhdj");
function createNewDiv() {
  let div = document.createElement("div");
  div.style.backgroundColor = "red";
  div.style.padding = "20px";
  div.style.position = "fixed"; // Update position to fixed
  div.style.top = "0"; // Add top position to 0
  div.style.marginLeft = "100px"; // Add top position to 0
  div.style.direction = "ltr"; // Add top position to 0
  div.style.zIndex = "1000"; // Add top position to 0
  div.style.width = "95%"; // Set the width to 100% to cover the entire page
  div.style.color = "white"; // Set the width to 100% to cover the entire page
  div.innerHTML = `
  WARNING - Potential Malicious page!
`;

  document.body.appendChild(div);
}
