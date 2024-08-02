const body = document.body;
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function $(querySelector){
    return document.querySelector(querySelector);
}
 
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        $('body').classList.add("dark");
    } else {
        $('body').classList.remove("dark");
    }
});