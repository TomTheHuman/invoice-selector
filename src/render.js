// Form 
const routeSelect = document.getElementById('route');
const printButton = document.getElementById('print');

// Fill select with route options
for (var i = 1; i <= 130; i++) {
    var option = document.createElement('option');

    var routeNum = "";
    if (i < 10) {routeNum = "00" + String(i)}
    else if (i < 100) {routeNum = "0" + String(i)}
    else if (i < 1000) {routeNum = String(i)}

    option.setAttribute('value', routeNum);
    option.appendChild(document.createTextNode("Route " + routeNum));
    routeSelect.appendChild(option);
}