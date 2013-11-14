function toArray(list){
    return Array.prototype.slice.call(list);
}
toArray(document.getElementsByTagName('code')).forEach(function(elem){
    eval(elem.textContent);
});