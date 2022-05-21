var count1 = 0;
var count2 = 0;
var count3 = 0;

function countLikes(element) {
    if (element == '#neilLikes') {
        count1++;
        document.querySelector(element).innerHTML = count1 + " like(s)";
    }
    else if (element == '#nicholeLikes') {
        count2++;
        document.querySelector(element).innerHTML = count2 + " like(s)";
    }
    else if (element == '#jimLikes') {
        count3++;
        document.querySelector(element).innerHTML = count3 + " like(s)";
    }
}