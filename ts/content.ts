import { Clock } from "./Clock.js"

console.log("Content script loaded >>")

var contentPort = browser.runtime.connect({ name: "cs_port" });
contentPort.postMessage({ msg: "message from content script" });
contentPort.onMessage.addListener( (resp : any) => {
  console.log("Content Port RESP >>");
  console.log(resp.msg);
})

function notifyBackgroundPage(e : any) {
  contentPort.postMessage({ msg: "page was clicked" })
}

window.addEventListener("click", notifyBackgroundPage);