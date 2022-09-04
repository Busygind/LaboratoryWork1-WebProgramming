function validateVariables(x, y, r) {

    
    var validationInfoPanel = document.querySelector('.validationInfo');
    validationInfoPanel.classList.remove("show");
    var xIsCorrect = false;
    var yIsCorrect = false;
    var rIsCorrect = false;
    var dataIsValid;
    var validationInfo = '';

    if (x === '' || x === undefined) {
        validationInfo += "<span>X is undefined!</span>";
    } else {
        xIsCorrect = true;
    }

    if (!(y.trim() === "")) {
        if (/-?\d[\.е]\d+|-?\d/.test(y)) {
            if ((parseInt(y) > -5) && (parseInt(y) < 3)) {
                yIsCorrect = true;
            } else validationInfo += "<span>Y must be in interval (-5..3)!</span>";
        } else validationInfo += "<span>Y must be a number!</span>";
    } else validationInfo += "<span>Y is undefined!</span>";

    if (r === '' || r === undefined) {
        validationInfo += "<span>R is undefined!</span>";
    } else {
        rIsCorrect = true;
    }

    dataIsValid = xIsCorrect && yIsCorrect && rIsCorrect;

    if (!dataIsValid) {
        $(".validationInfo").html(validationInfo);
        validationInfoPanel.classList.add("show");
    }

    return dataIsValid;

}

function validateTextField() {
    $('.y-text').on('input', function() {
        $(this).val($(this).val().replace(/[^.-\d]/, ''))
    });
}