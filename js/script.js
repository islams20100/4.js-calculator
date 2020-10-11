var input = ''
var output = '';
$("button").click(function () {
    var fired_button = $(this).val();
    switch (fired_button) {
        case '=':
            output = eval(input);
            document.getElementById('result').innerHTML = output;
            input = output;
        default:
            if (fired_button != '=')
                input += fired_button;
            document.getElementById('result').innerHTML = input;
    }
});