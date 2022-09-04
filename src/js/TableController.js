getIP('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
    var ip = data.match(ipRegex)[0];
    console.log(ip);
    if (document.cookie !== "user=" + ip) {
        (alert('Our site uses cookies, your work on the page will be stored in the local cache.'))
                    
        document.cookie = "user=" + ip;
        if (window.localStorage.getItem('tableData') != null) {
            $('#table tr:last').after(window.localStorage.getItem('tableData'));
        }
                
    } else {
        if (window.localStorage.getItem('tableData') != null) {
            $('#table tr:last').after(window.localStorage.getItem('tableData'));
        }
    }
});

function getIP(url) {
    return fetch(url).then(res => res.text());
}
  
function updateTable(data) {
    let storage = window.localStorage;
    storage.setItem('tableData', (storage.getItem('tableData') != null ? storage.getItem('tableData') : '') + data);
    $('#table tr:last').after(data);
}