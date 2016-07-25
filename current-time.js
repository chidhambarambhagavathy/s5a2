function logCurrentTime() {
	var today = new Date;
	console.log(today.getHours()+":"+(today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()));
}

logCurrentTime();