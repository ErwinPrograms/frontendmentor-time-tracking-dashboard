const timespanSelectors = document.querySelectorAll('.timespan-input input');

timespanSelectors.forEach( selection => {
    selection.addEventListener( 'click', (event) => {
        changeActiveTimespan(event.target.id);
    })
});

function changeActiveTimespan(destinationID) {
    const activeHours = document.querySelectorAll('.time-block .active');

    if(destinationID === 'daily-selector') {
        const dailyHours = document.querySelectorAll('.time-block .daily'); 
        swapActiveElements(activeHours, dailyHours);
    }
    if(destinationID === 'weekly-selector') {
        const weeklyHours = document.querySelectorAll('.time-block .weekly'); 
        swapActiveElements(activeHours, weeklyHours);
    }
    if(destinationID === 'monthly-selector') {
        const monthlyHours = document.querySelectorAll('.time-block .monthly'); 
        swapActiveElements(activeHours, monthlyHours);
    }
}


//function won't work if targetElements list isn't empty
function swapActiveElements(currentElements, targetElements) {

    //guard clause doesn't change final output
    if(targetElements[0].classList.contains("active")) {
        return;
    }

    currentElements.forEach( element => {
        element.classList.toggle('active');
    });

    targetElements.forEach( element => {
        element.classList.toggle('active');
    });
}