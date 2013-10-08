(function(){
    function activeCity(){
        var activeElement = document.querySelector("#event-map > .active");
        if(activeElement){
            activeElement.className = activeElement.classList[0];
            this.parentNode.className += " active";
        }
    }
    
    var cities = document.querySelectorAll('#event-map > li > a');
    
    for(var i = 0, j = cities.length; i < j; i++){
        cities[i].addEventListener('click', activeCity, false);
    }
})();