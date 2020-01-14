function convert(...args){
    let resultConvertArgs = [];
    for(let i = 0; i < args.length; i++){
        if(typeof args[i] === 'string'){
            resultConvertArgs.push(+args[i]);
        } else {
            resultConvertArgs.push(args[i].toString());
        }
    }
    return resultConvertArgs;
}
convert('1', 2, 3, '4');

function executeforEach(args, callback){
    for(let i = 0;i < args.length; i++){
        callback(args[i]);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el * 2)
});

function mapArray(args, callback){
    let resultMapArrayArgs = [];
    executeforEach(args, function (el) {
        resultMapArrayArgs.push(callback(+el))
    });
    return resultMapArrayArgs;
}
mapArray([2, '5', 8], function(el) {
 return el + 3 
});

function filterArray(args, callback) {
    let resultFilaterArrayArgs = [];
    executeforEach(args, function (el) {
        if(callback(el)){
            resultFilaterArrayArgs.push(+el);
        }
    });
    return resultFilaterArrayArgs;
}
filterArray([2, 5, 8], function(el) {
 return el % 2 === 0 
});

function flipOver(str){
    let resultFlipOverStr = [];
    for(let i = str.length - 1; i >= 0; i--){
        resultFlipOverStr.push(str[i]);
    }
    return resultFlipOverStr;
}
flipOver('hey world');

function makeListFromRange(args){
    let resultMakeListFromRangeArgs = [];
    for(let i = args[0]; i <= args[1]; i++){
        resultMakeListFromRangeArgs.push(i);
    }
    return resultMakeListFromRangeArgs;
}
makeListFromRange([2, 7]);

function getArrayOfKeys(args, key){
    const resultGetArrayOfKeysArgs = [];
    executeforEach(args, function (el) {
        resultGetArrayOfKeysArgs.push(el[key])
    });
    return resultGetArrayOfKeysArgs;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
getArrayOfKeys(actors, 'name');

function substitute(args){
    let resultSubstituteArgs = [];
    mapArray(args, function (el) {
        if(el < 30){
            resultSubstituteArgs.push('*');
        } else{
            resultSubstituteArgs.push(el);
        }
    });
    return resultSubstituteArgs;
}
substitute([58, 14, 48, 2, 31, 29]);

const date = new Date(2020, 1, 2);
function getPastDay(date, daysAgo){
    let past = date;
    past.setDate(date.getDate() - daysAgo);
    return past.getDate();
}
getPastDay(date, 2);

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minute = date.getMinutes();
    return `${year}/${month}/${day} ${hours}:${minute}`;
}
formatDate(new Date());