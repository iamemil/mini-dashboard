function fn15sec() {
var objToday = new Date(),
	weekday = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function () { var a = objToday;  return 1 == a}(),
	hourOfDay = objToday.getHours(),
	minuteOfDay = objToday.getMinutes(),
	dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
	curMonth = months[objToday.getMonth()];
var today = dayOfWeek + ", " + dayOfMonth + " " + curMonth;
document.getElementsByClassName('date')[0].textContent = today;

if(hourOfDay < 10){
	hourOfDay = "0" + hourOfDay;
}
if(minuteOfDay < 10){
	minuteOfDay = "0" + minuteOfDay;
}
var todayTime = hourOfDay + ":" + minuteOfDay;
document.getElementsByClassName('clock')[0].textContent = todayTime;
}
fn15sec();
setInterval(fn15sec, 15*1000);