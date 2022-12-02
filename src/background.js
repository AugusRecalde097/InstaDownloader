
    console.log("background script");

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab){
    let msg = {
        'txt': 'descargar'
    };

    chrome.tabs.sendMessage(tab.id, msg);
}
