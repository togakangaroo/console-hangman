(function(){
    
    /////////////////////////////////////////////////
    // Variable declaration
    /////////////////////////////////////////////////
    var toArray, scope, contains, forEachLetter
        ;
    /////////////////////////////////////////////////
    // Variable initialzation
    /////////////////////////////////////////////////
    toArray = function(obj) {
        return Array.prototype.slice.call(obj)
    };
    scope = function(fn) {
        fn();
    }
    contains = function(array, value) {
        return array.indexOf(value) != -1;
    }
    forEachLetter = function(str, fn) {
        var letters, mappedLetters
            ;
        letters = toArray(str);
        mappedLetters = letters.map(fn);
        return mappedLetters.join('');
    }

    // Export variables
    /////////////////////////////////////////////////
    window.hangman = {
        forEachLetter: forEachLetter,
        scope: scope,
        contains: contains,
    };
}).call();