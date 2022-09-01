function cleanFields() {
    $('').prop('checked', false);
}

function cleanTable() {
    let emptyTable = `<tr>
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Current time</th>
        <th>Running time</th>
        <th>Result</th>
        </tr>`;
    $('#table').html(emptyTable);
}