function selectR(r) {
    $('#r1').prop('checked', false);
    $('#r15').prop('checked', false);
    $('#r2').prop('checked', false);
    $('#r25').prop('checked', false);
    $('#r3').prop('checked', false);
    $('#r' + r).prop('checked', true);
}