/* Listen for messages */
console.log(chrome.tabs)
chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, { action: "getDOM" }, function(response) {
        console.log(response);
    });
});
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    if (msg.text && (msg.text == "report_back")) {
        /* Call the specified callback, passing
           the web-pages DOM content as argument */
    sendResponse(document.getElementById("getText").innerHTML);
    }
});