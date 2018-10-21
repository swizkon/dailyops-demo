
var formatDays = function(days) {
return (days == 0) ? "Today!"
        : (days == 1) ? "Tomorrow"
        : days + " days";
}

var today = new Date(Date.now());
today.setHours(0);
today.setMinutes(0);
today.setSeconds(1);

var sorted = [];

var tempDate;
var tempAniversaryCount;
for (var anniversary in anniversaries) {
    tempAniversaryCount = 0;
    tempDate = new Date(anniversary);
    while (tempDate.getTime() < today.getTime()) {
        tempAniversaryCount += 1;
        tempDate.setFullYear(tempDate.getFullYear() + 1);
    }
    sorted[sorted.length] = {
        "title": anniversaries[anniversary],
        "original": anniversary,
        "next": tempDate.toJSON(),
        "count": tempAniversaryCount
    };
}
sorted.sort(function (a, b) {
    return new Date(a.next).getTime() - new Date(b.next).getTime();
});

var a = moment(today.toJSON());
var b = moment(sorted[0].next);

var days = b.diff(a, 'days');

// next-title

document.querySelector("#page-title").textContent = protodata.title;
document.querySelector("#page-subtitle").textContent = protodata.username;


var upcoming = "", journey;


function progress(percent) {

    return "<div class=\"progress\" style=\"width:50%;text-align:center;margin: 0 auto;\">"
    + "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: " + percent + "%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>"
    + "</div>";
}
