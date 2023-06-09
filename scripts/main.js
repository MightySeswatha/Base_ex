window.onload = () => {

    /*Timer*/
    const countdown = new Date(2023, 6, 24, 0, 0, 0, 0);
    var time_num = document.getElementsByClassName("time_num");
    let timerId = setInterval(() => ChangeDate(new Date()), 1000);

    function ChangeDate(today) {
        var dif = countdown - today;
        var days = Math.floor(dif / (1000 * 60 * 60 * 24));
        time_num[0].innerHTML = days;
        var hours = Math.floor((dif - (days * 1000 * 3600 * 24)) / (1000 * 3600));
        time_num[1].innerHTML = hours;
        var minutes = Math.floor((dif - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600)) / (60000));
        time_num[2].innerHTML = minutes;
        var seconds = Math.floor((dif - (days * 1000 * 3600 * 24) - (hours * 1000 * 3600) - (minutes * 60000)) / 1000);
        time_num[3].innerHTML = seconds;
    }
    /**/
    /*Validation*/
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    const input = document.getElementById('email');
    const log_btn = document.getElementById("log_btn");
    log_btn.setAttribute("disabled", true);

    function onInput() {
        if (isEmailValid(input.value)) {
            input.style.color = 'green';
            input.style.borderColor = 'green';
            log_btn.removeAttribute("disabled");
        } else {
            input.style.color = 'red';
            input.style.borderColor = 'red';
            log_btn.setAttribute("disabled", true);
        }
    }

    input.addEventListener('input', onInput);

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    log_btn.onclick = () => {
        back[0].removeAttribute("id");
    }
    /*Popup*/

    var back = document.getElementsByClassName("back");
    var popup_close = document.getElementById("popup_close");
    var btn_popup = document.getElementById("btn_popup");

    popup_close.onclick = () => {
        back[0].setAttribute("id", "off");
    }

    btn_popup.onclick = () => {
        back[0].setAttribute("id", "off");
    }
    /**/

}
