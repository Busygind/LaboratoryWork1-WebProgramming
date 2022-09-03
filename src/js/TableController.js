if (window.localStorage.getItem('tableData') != null) {
    $('#table tr:last').after(window.localStorage.getItem('tableData'));
}

function updateTable(data) {
    let storage = window.localStorage;
    storage.setItem('tableData', (storage.getItem('tableData') != null ? storage.getItem('tableData') : '') + data);
    $('#table tr:last').after(data);
}