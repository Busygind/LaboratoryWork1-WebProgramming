function update() {
    // const request = new XMLHttpRequest();
    var radios = document.getElementsByName("x-value");
    var xval;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            xval = radios[i].value;
        }
    }
    let yval = $("#y-value").val();
    var rval;
    var checkboxes = document.getElementsByName('r-value');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            rval = checkboxes[i].value;
        }
    }
    // console.log(xval.trim(), yval.trim(), rval.trim());
    if (validateVariables(xval, yval, rval)) {
        $.ajax({
            type: "POST",
            url: "../src/php/index.php",
            async: false,
            data: {"x": xval.trim(), "y": yval.trim(), "r": rval.trim()},
            success: function(data) {
                $('#table tr:last').after(data);
            },
            error: function(data) { 
                $('#table tr:last').after(data);
                // alert(data);
            }
        });     

        console.log(xval, yval, rval);
    }

}