var list = document.getElementById('list'),
    addElem = document.getElementById('addElem');

addElem.addEventListener('click', function() {

    var number = document.getElementsByTagName('li').length,
        element = document.createElement('li');

    element.innerHTML = 'item ' + number;
    list.appendChild(element);

});
