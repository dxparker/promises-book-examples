// web worker for example 4-19
onmessage = function(event) {
	postMessage({
		status: 'completed',
		id: event.data.id,
		result: 'some calculated result'
	});
}
