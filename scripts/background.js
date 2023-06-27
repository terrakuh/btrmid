chrome.runtime.onMessage.addListener(async ({ url, active }, sender, sendResponse) => {
	chrome.tabs.create({ url, active })
})
