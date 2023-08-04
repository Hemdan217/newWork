import { bumbleNumber, bumbleCode, getCaptchaSrc, enterCaptcha, bumbleProfil, genderOption, imageUpload } from "../content";
import { createClient } from "@supabase/supabase-js";
import axios from "axios";


const supabaseUrl = "https://czebriiwibpfrhtfovxg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ZWJyaWl3aWJwZnJodGZvdnhnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4ODk3OTI2MiwiZXhwIjoyMDA0NTU1MjYyfQ.7xX-dRjjGePiTbratiJiFH4XljAp1zUOdiXP2LhxlMM";
const supabase = createClient(supabaseUrl, supabaseKey);
let activeTabId;
 let images,numberApi ;
// This function runs when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
  // Perform any required setup tasks
});

// This function runs when the extension receives a message from the popup
chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
  if (request.action === 'fetchData') {
createBumble('34604181894')
  }
});



export async function createBumble(number) {
    numberApi=number
  // Préparation des onglets
  const { data, error } = await supabase.storage.from("images").list(); // this is name of folder
  console.log(data);
    images = data;
  console.log(images);
  let currentTabs = await chrome.tabs.query({ currentWindow: true });
  let targetTab = currentTabs.find(
    (tab) => tab.url === "https://bumble.com/get-started"
  );
  if (targetTab) {
    await chrome.tabs.update(targetTab.id, { active: true });
    activeTabId = targetTab.id;
  } else {
    await chrome.tabs.update({
      url: "https://bumble.com/get-started",
      active: true,
    });
    currentTabs = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    });
    console.log(currentTabs);

    targetTab = currentTabs.find(
      (tab) => tab.pendingUrl === "https://bumble.com/get-started"
    );
    activeTabId = targetTab.id;
  }

  console.log(activeTabId);
  console.log(currentTabs);
  if (activeTabId) {
    setInterval(async () => {
      let result = await checkElement(".apple-button"); //do you chnage this ?di dyes ok fine
      if (result) {
        await chrome.scripting.executeScript({
          args: [number],
          target: { tabId: activeTabId },
          func: bumbleNumber,
        });
      }

      result = await checkElement(".captcha__image");
      if (result) {
        let imgSrc = await chrome.scripting.executeScript({
          args: [],
          target: { tabId: activeTabId },
          func: getCaptchaSrc,
        });
  
        setTimeout(() => {
          ocrRecognition(imgSrc[0].result.result.imageUrl);
        }, 1000);
      }

      result = await checkElement(".code-field__digit");
      if (result) {
        getCode(); // here we ask api to give us the code  save
      }

      result = await checkElement(".hint.hint--color-gray-dark");
      if (result) {
        await chrome.scripting.executeScript({
          args: [],
          target: { tabId: activeTabId },
          func: bumbleProfil,
        }); // here we ask api to give us the code  save
      }
      result = await checkElement(
        ".choice-field.trigger-control-hover.choice-field--tall"
      );
      if (result) {
        await chrome.scripting.executeScript({
          args: [],
          target: { tabId: activeTabId },
          func: genderOption,
        }); // here we ask api to give us the code  save
      }
      result = await checkElement(".file-upload__input");
      if (result) {
        readImage();
      }
    }, 7000); //more? no save it
  }
}

async function checkElement(clName) {
  let result = await chrome.scripting.executeScript({
    args: [clName],
    target: { tabId: activeTabId },
    func: check,
  });
  return result[0].result;
}
function check(clName) {
  console.log(document);
  console.log(document.querySelector(`${clName}`) ? true : false);
  return document.querySelector(`${clName}`) ? true : false;
}
async function readImage() {
  const imageResponse = await axios.get(
    `https://czebriiwibpfrhtfovxg.supabase.co/storage/v1/object/public/images/${images[0].name}`,

    {
      responseType: "arraybuffer",
      withCredentials: false,
    }
  );

  const base64String = `data:image/png;base64,${Buffer.from(
    imageResponse.data,
    "binary"
  ).toString("base64")}`;

  setTimeout(async () => {
    await chrome.scripting.executeScript({
      args: [base64String],
      target: { tabId: activeTabId },
      func: imageUpload,
    });
    await supabase.storage.from("images").remove([images[0].name]);
    images.
  }, 1000);
}
// sorry save it

async function ocrRecognition(imageSrc) {
  const imageResponse = await axios.get(imageSrc, {
    responseType: "arraybuffer",
  });
  const imageData = Buffer.from(imageResponse.data, "binary").toString(
    "base64"
  );
  const response = await axios.post(
    "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDxHFTVWUUyPz2k1tMYAABBNw56HnZKxdg",
    {
      requests: [
        {
          image: {
            content: imageData,
          },
          features: [
            {
              type: "TEXT_DETECTION",
            },
          ],
        },
      ],
    }
  );

  const result = response.data;
  const newCaptcha = result.responses[0].fullTextAnnotation.text;
  setTimeout(async () => {
    await chrome.scripting.executeScript({
      args: [newCaptcha],
      target: { tabId: activeTabId },
      func: enterCaptcha,
    });
  }, 1500);
}
function getCode() {

  setTimeout(async () => {
    const activeActivations = await axios.get(
      `https://api.sms-activate.org/stubs/handler_api.php?api_key=6382fc15Abc2424b2db98822d6Ad6c25&action=getActiveActivations`
    );
    const data = activeActivations.data;
    const filteredActivations = data.activeActivations.filter(
      (activation) => activation.phoneNumber === numberApi
    );
    // console.log(filteredActivations[0]); // this give good api result + code

    // setCode(filteredActivations[0].smsCode);
    // console.log(code); // this give wrong
    // console.log("This Is the code from popup", code); //save
    setTimeout(async () => {
      await chrome.scripting.executeScript({
        args: [filteredActivations[0].smsCode],
        target: { tabId: activeTabId },
        func: bumbleCode,
      });
    }, 1000);
  }, 30000); // you want me t osave? yes
}