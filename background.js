chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
         return {redirectUrl: details.url.replace('wikipedia', '00wikipedia')};
    },
    {
		urls: [
			"*://wikipedia.org/*",
			"*://*.wikipedia.org/*"]
	},    
    ["blocking"]
);
