// Update the relevant fields with the new data
let domString;
function setDOMInfo(info) {
	console.log(info)
	domString = info.allWindowDoc;
	document.getElementById('total').textContent   = info.total;
	document.getElementById('inputs').textContent  = info.inputs;
	document.getElementById('buttons').textContent = info.buttons;
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
	// ...query for the active tab...
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		// ...and send a request for the DOM info...
		chrome.tabs.sendMessage(
			tabs[0].id,
			{from: 'popup', subject: 'DOMInfo'},  setDOMInfo);
	});
	document.getElementById("click-this").addEventListener("click", send);
});

function send(){	
	var payload = {
		data: domString
	};

	fetch("http://localhost:3000/create-pdf-file",
	{
			method: "POST",
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ data: payload })
	}).then(function(res){
		console.log(res);
	}, function(err){
		console.log(err);
	})	
}