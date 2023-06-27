function getHref(node) {
	for (let i = 0; i < 10 && node != null; ++i) {
		if (node.href !== undefined) {
			return node.href
		}
		node = node.parentNode
	}
}

function handler(ev) {
	console.log(ev)
	if (ev.button === 1) {
		const url = getHref(ev.target)
		if (url != null) {
			chrome.runtime.sendMessage({ url, active: !ev.shiftKey })
			ev.preventDefault()
			ev.stopPropagation()
		}
	}
}

window.addEventListener("auxclick", handler)
