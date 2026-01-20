const timeOption = document.getElementById('time-option');

timeOption.addEventListener('change', (event) => {
    const val = event.target.value;
    if (val < 1 || val > 60) {
        alert("Please enter a value between 1 and 60.");
        event.target.value = 25;
    }
});

const saveButton = document.getElementById('save-button');
saveButton.addEventListener('click', () => {
    chrome.storage.local.set({
        timer: 0,
        timeOption: timeOption.value,
        isRunning: false,
    })
});

chrome.storage.local.get(['timeOption'], (res) => {
    timeOption.value = res.timeOption;
    // timeOption.value = res.timeOption ? res.timeOption : 25;
});