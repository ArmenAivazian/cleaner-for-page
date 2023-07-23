function injectTheScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.scripting.executeScript({ target: { tabId: tabs[0].id }, files: ['chat-openai.js'] })
    })
}

// for chat.openai.com
document.getElementById('clear-all-chats').addEventListener('click', injectTheScript);