chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(`Tab updated: ${tabId}`, changeInfo, tab);
  });
  