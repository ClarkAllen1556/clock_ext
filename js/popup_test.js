"use strict";
browser.browserAction.onClicked.addListener(() => alert("button pressed"));
function changeText() {
    var _a;
    console.log("asdfasdfasdfuasduasdfasdf");
    (_a = document.getElementById("words")) === null || _a === void 0 ? void 0 : _a.setAttribute("text", "90001");
}
