if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
    return function(){
        if (arguments[0].isArray !== 'undefined'){
            var list = arguments[0];
            var sum = function(previousValue, currentValue){
                return previousValue + currentValue;
            };

            return list.reduce(sum);
        }
    };
});
