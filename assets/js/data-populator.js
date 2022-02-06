fetch('../../data.json')    //fetch() returns a promise
    .then(response => response.json())  //json() retruns another promise
    .then(data => populateData(data));   //when that promise is resolved, we then handle it in this function


function populateData(dataObject) {
    const timeBlocks = document.querySelectorAll('.time-block');
    
    for(let i = 0; i < dataObject.length; i++) {
        let category = timeBlocks[i].querySelector('.time-category');
        category.innerHTML = dataObject[i].title;

        let timeFrames = timeBlocks[i].querySelectorAll('.num-hours');
        
        //TODO: Rewrite this bad, no good, horrible code
        //Bad practice hack: Manual reassignment. Breaks DRY
        timeFrames[0].innerHTML = hourStringCreationHelperHack(dataObject[i].timeframes.daily.current);
        timeFrames[1].innerHTML = "Yesterday - " +  hourStringCreationHelperHack(dataObject[i].timeframes.daily.previous);
        timeFrames[2].innerHTML = hourStringCreationHelperHack(dataObject[i].timeframes.weekly.current);
        timeFrames[3].innerHTML = "Last Week - " +  hourStringCreationHelperHack(dataObject[i].timeframes.weekly.previous);
        timeFrames[4].innerHTML = hourStringCreationHelperHack(dataObject[i].timeframes.monthly.current);
        timeFrames[5].innerHTML = "Last Month - " + hourStringCreationHelperHack(dataObject[i].timeframes.monthly.previous);

    }
}

//TODO: Rewrite this bad, no good, horrible code
function hourStringCreationHelperHack(hours)
{
    if (hours == 1) {
        return hours + "hr";
    }
    return hours + "hrs";
}