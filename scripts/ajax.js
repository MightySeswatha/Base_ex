$(document).ready(function () {
    $("#log_btn").click(
        function () {
            sendAjaxForm();
            return false;
        }
    );
});

function sendAjaxForm() {
    $.ajax({
        method: 'get',
        url: '../scripts/script.js',
        dataType: "script"
    });
}