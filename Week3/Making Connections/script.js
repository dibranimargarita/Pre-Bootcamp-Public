console.log("Rita");
var connRequests = 2;

function changeName(element) {
    document.querySelector(element).innerText = "Magi";

}

function accept(element) {
    connRequests--;
    document.querySelector(element).remove();
    document.querySelector('#reqNumber').innerHTML = connRequests;
    if (element == '#todd') {
        document.querySelector('.connections > .req-list').innerHTML +=
        '<div class="users" id="todd"><div class="user">' + 
        '<img class="user-image" src="images/todd-s.jpg" alt="todd e"><span>Todd E</span>' +
        '</div></div>';
    }
    else if (element == '#phil') {
        document.querySelector('.connections > .req-list').innerHTML +=
        '<div class="users" id="phil"><div class="user">' + 
        '<img class="user-image" src="images/phil-s.jpg" alt="todd e"><span>Phil K</span>' +
        '</div></div>';
    }
}

function reject(element) {
    connRequests--;
    document.querySelector(element).remove();
    document.querySelector('#reqNumber').innerHTML = connRequests;
}