var currentDayEl  = document.querySelector("#currentDay");
var currentDate = moment().format("MMMM Do, YYYY");
var containerEl = document.querySelector("#container");



currentDayEl.textContent = currentDate;
var currentTime = moment().format('H');
console.log("current time=", currentTime);

for (var i=0; i < 9; i++){
    var rowEl = document.createElement("div");
    var col1El = document.createElement("div");
    var col2El = document.createElement("div");
    var col3El = document.createElement("button");
    var btnIconEl = document.createElement("i");
    let timeOfHour = i + 9;
    if (timeOfHour > 12){
        timeHour = timeOfHour - 12;
        timeHourString = timeHour + " PM";
    }
    else if (timeOfHour < 12) {
        timeHourString = timeOfHour + " AM";
    }
    else {
        timeHourString = timeOfHour + " PM";
    }

    rowEl.setAttribute("class", "row height: 100px");
    rowEl.setAttribute("id", "id-" + i);
    col1El.setAttribute("class", "col-md-1 text-center pt-3 hour");
    col1El.textContent = timeHourString;
    col2El.setAttribute("class", "col-md-10 text-center");

    if (timeOfHour < currentTime){
        col2El.classList.add("past");
    }
    else if (timeOfHour == currentTime) {
        col2El.classList.add("present");
    }
    else {
        col2El.classList.add("future");
    }
    col3El.setAttribute("class", "col-md-1 text-center saveBtn");
    btnIconEl.setAttribute("class", "fas fa-save fa-2x");
    col3El.appendChild(btnIconEl);
    rowEl.appendChild(col1El);
    rowEl.appendChild(col2El);
    rowEl.appendChild(col3El);
    containerEl.appendChild(rowEl);
};

