function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const name = function(){
        return 'function'
    }
    return name
}
function returnsAnAnonymousFunction(){
    return function(){
        'function'
    }
}