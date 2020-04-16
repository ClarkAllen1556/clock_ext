console.log("Content script loaded >>");
var contentPort = browser.runtime.connect({ name: "cs_port" });
contentPort.postMessage({ msg: `${Date.now} >> CONTENT PORT CONNECT` });
contentPort.onMessage.addListener((resp) => {
    console.log(resp.msg);
});
