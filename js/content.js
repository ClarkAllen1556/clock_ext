console.log("Content script loaded >>");
// browser.browserAction.onClicked.addListener(() => {
//   console.log("browser action clicked");
//   var btn = document.createElement("button");
//   btn.setAttribute("text", "this is a the new button");
//   $("body").append(btn);
//   // browser.tabs.create({ url: "../html/timeContent.html" })
// });
// var btn = document.createElement("h1");
// btn.setAttribute("text", "this is a the new button");
// $("body").append(btn);
var thing = `
<link rel="stylesheet" href="../styles/timeContent.css">
<div id="ex-sidebar">
  <div id="ex-floater">
  This is a test
  </div>
</div>
`;
$("body").add(thing);
// --- internal messaging
var contentPort = browser.runtime.connect({ name: "cs_port" });
contentPort.postMessage({ msg: `${Date.now} >> CONTENT PORT CONNECT` });
contentPort.onMessage.addListener((resp) => {
    console.log(resp.msg);
    if (resp.msg == "BUTTON_CLICKED") {
        console.log("button clicked");
    }
});
