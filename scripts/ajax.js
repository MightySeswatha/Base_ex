$(document).ready(function () {
    $("#log_btn").click(
        function () {
            sendAjaxForm('wdh_result_form', 'ajax_form', 'http://work1.42web.io/server.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
        success: function () { //Данные отправлены успешно
            $('#wdh_result_form').html("SUCCESS!");
        },
        error: function () { // Данные не отправлены
            $('#wdh_result_form').html("FAIL!");
        }
    });
}
