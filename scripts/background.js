chrome.runtime.onMessage.addListener(async ({ url, active }, sender, sendResponse) => {
	const tabs = await chrome.tabs.query({ active: true })
	chrome.tabs.create({ url, active, openerTabId: tabs[0].id, index: tabs[0].index + 1 })
})
