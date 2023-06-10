window.onload = () => {

    /*Resize window*/
    function resize() {
        var time_inner_desc = document.getElementsByClassName("time_inner_desc");
        var row = document.getElementsByClassName("row");
        if (window.innerWidth < 1024) {
            row[0].setAttribute("id", "off");
            row[1].removeAttribute("id");
        }
        else {
            row[0].removeAttribute("id");
            row[1].setAttribute("id", "off");
        }
        if (window.innerWidth <= 768) {
            time_inner_desc[0].innerHTML = "DD";
            time_inner_desc[1].innerHTML = "HH";
            time_inner_desc[2].innerHTML = "MM";
            time_inner_desc[3].innerHTML = "SS";
        }
        else {
            time_inner_desc[0].innerHTML = "Days";
            time_inner_desc[1].innerHTML = "Hours";
            time_inner_desc[2].innerHTML = "Minutes";
            time_inner_desc[3].innerHTML = "Seconds";
        }
    }
    resize();
    window.onresize = () => resize();
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

    /*Animation*/
    var line_block = document.getElementsByClassName("line_block");
    var line_desc = document.getElementsByClassName("line_desc");

    for (let elem of line_block) {
        elem.onclick = () => {
            var k = [...line_block].indexOf(elem);
            elem.children[0].removeAttribute("class");
            elem.children[0].setAttribute("class", "active");
            line_desc[k].removeAttribute("id");
            animation(line_desc[k]);

            for (let i = 0; i < line_block.length; i++) {
                if (line_block[i] != elem) {
                    line_block[i].children[0].removeAttribute("class");
                    line_block[i].children[0].setAttribute("class", "line_block_back")
                    line_desc[i].setAttribute("id", "off");
                }
            }
        }
    }

    function animation(obj) {

        if (window.innerWidth >= 1024) {
            obj.children[0].style.left = 70 + "%";

            function change(from, to) {
                let current = from;

                let timerId = setInterval(function () {
                    obj.children[0].style.left = current + "%";
                    if (current == to) {
                        clearInterval(timerId);
                    }
                    current--;
                }, 10);
            }

            change(70, 0);
        }

        else {
        }

    }

    /**/

}
