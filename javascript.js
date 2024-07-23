function timer() {
    const startButton = document.querySelector('#startButton');
    const pauseButton = document.querySelector('#pauseButton');
    const resetButton = document.querySelector('#resetButton');
    const addTimerButton = document.querySelector('#addTimerButton');
    const inputs = document.querySelectorAll('input[type="number"]');

    startButton.addEventListener("click", (event) => {
        const seconds = document.querySelector('#secondAmount');
        const minutes = document.querySelector('#minuteAmount');
        const hours = document.querySelector('#hourAmount');

        let second = seconds.value;
        let minute = minutes.value;
        let hour = hours.value;

        let wrongInput = false;

        //handling wrong input values
        for(const input of inputs) {
            let value = input.value;
            let min = input.min;
            let max = input.max;

            if(value.toString().length === 0) {
                value = 0;
            }

            if(value > max || value < min) {
                if(input.id === "hourAmount") {
                    alert("please put in a value between 0 and 99 for hours");
                } else if(input.id === "minuteAmount") {
                    alert("please put in a value between 0 and 60 for minutes");
                } else if(input.id === "secondAmount") {
                    alert("please put in a value between 0 and 60 for seconds");
                }
                wrongInput = true;
            }
        }

        const intervalId = setInterval(function () {
            if(!wrongInput) {
                startButton.style.display = "none";

                pauseButton.style.display = "block";
                resetButton.style.display = "block";

                if(second != 0 || minute != 0 || hour != 0) {
                    if(second == 0) {
                        second = 59;
                        if(minute == 0) {
                            minute = 59;
                            if(hour != 0) {
                                hour--;
                            }
                        } else {
                            minute--;
                        }
                    } else {
                        second--;
                    }
    
                    seconds.setAttribute('readOnly', "readOnly");
    
                    minutes.setAttribute('readOnly', "readOnly");
    
                    hours.setAttribute('readOnly', "readOnly");
    
                    seconds.value = second.toString().padStart(2, '0');
                    minutes.value = minute.toString().padStart(2, '0');
                    hours.value = hour.toString().padStart(2, '0');
    
                    document.title = `${hours.value}:${minutes.value}:${seconds.value}`;
                } else {
                    alert("Timer Complete");
                    resetButton.click();
                    clearInterval(intervalId);
                    return;
                }
            }
        }, 1000);

        pauseButton.addEventListener("click", (event) => {
            clearInterval(intervalId);
            startButton.style.display = "block";
            pauseButton.style.display = "none";
            return;
        });

        resetButton.addEventListener("click", (event) => {
            clearInterval(intervalId);
            seconds.value = "";
            minutes.value = "";
            hours.value = "";

            resetButton.style.display = "none";
            pauseButton.style.display = "none";
            startButton.style.display = "block";

            seconds.removeAttribute('readOnly');
            minutes.removeAttribute('readOnly');
            hours.removeAttribute('readOnly');

            document.title = "Countdown Timer";
        });       
        
        //addTimerButton.addEventListener("click", (event) => {

        //});
    });

    //auto tabbing to the next input
    inputs.forEach((input, index) => {
        input.addEventListener("input", (event) => {
            const value = event.target.value;
            if (value.length === input.maxLength) {
                if (index < inputs.length - 1 && inputs[index + 1].value.length != inputs[index + 1].maxLength) {
                    inputs[index + 1].focus();
                } else if(index + 1 < inputs.length - 1 && inputs[index + 2].value.length != inputs[index + 2].maxLength) {
                    inputs[index + 2].focus();
                }
            }
        });
    });
}

function themes() {
    const antelopeCanyonButton = document.querySelector('#antelopeCanyonButton');
    const centralParkButton = document.querySelector('#centralParkButton');
    const empireBuildingButton = document.querySelector('#empireBuildingButton');
    const goldenGateButton = document.querySelector('#goldenGateButton');
    const grandCanyonButton = document.querySelector('#grandCanyonButton');
    const sunsetButton = document.querySelector('#sunsetButton');
    const page = document.querySelector('#page');
    const hourAmount = document.querySelector('#hourAmount');
    const theDotsBetween = document.querySelector('#timerInput');
    const minuteAmount = document.querySelector('#minuteAmount');
    const secondAmount = document.querySelector('#secondAmount');
    const pageTitle = document.querySelector('#pageTitle');

    centralParkButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/centralPark.jpg')";
        countDownTimerAndTitle.style.marginTop = "15vh";
        hourAmount.style.color = "black";
        minuteAmount.style.color = "black";
        secondAmount.style.color = "black";
        theDotsBetween.style.color = "black";
        pageTitle.style.color = "black";
    });

    antelopeCanyonButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/antelopeCanyon.jpg')";
        countDownTimerAndTitle.style.marginTop = "30vh";
        hourAmount.style.color = "black";
        minuteAmount.style.color = "black";
        secondAmount.style.color = "black";
        theDotsBetween.style.color = "black";
        pageTitle.style.color = "black";
    });

    empireBuildingButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/empireBuilding.jpg')";
        countDownTimerAndTitle.style.marginTop = "0vh";
        hourAmount.style.color = "white";
        minuteAmount.style.color = "white";
        secondAmount.style.color = "white";
        theDotsBetween.style.color = "white";
        pageTitle.style.color = "white";
    });

    goldenGateButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/goldenGate.jpg')";
        countDownTimerAndTitle.style.marginTop = "8vh";
        hourAmount.style.color = "black";
        minuteAmount.style.color = "black";
        secondAmount.style.color = "black";
        theDotsBetween.style.color = "black";
        pageTitle.style.color = "black";
    });

    grandCanyonButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/grandCanyon.jpg')";
        countDownTimerAndTitle.style.marginTop = "2vh";
        hourAmount.style.color = "black";
        minuteAmount.style.color = "black";
        secondAmount.style.color = "black";
        theDotsBetween.style.color = "black";
        pageTitle.style.color = "black";
    });

    sunsetButton.addEventListener("click", (event) => {
        page.style.backgroundImage = "url('./assets/sunset.jpg')";
        countDownTimerAndTitle.style.marginTop = "20vh";
        hourAmount.style.color = "black";
        minuteAmount.style.color = "black";
        secondAmount.style.color = "black";
        theDotsBetween.style.color = "black";
        pageTitle.style.color = "black";
    });
}

timer();
themes();