var arr = new Array(5);

function fillArray() {
    for (var n = 0; n < arr.length; n++) {
        arr[n] = Math.floor(Math.random() * 200 - 100);
    }
}

fillArray ()

function replaceFromArray () {
    arr = arr.map(function(item) {
        if (item < 0 ) {
            return 0;
        }
        return item;
    })
}

replaceFromArray ()

function addToArray () {
    var tmpArr = arr;
    var count = 0;

    tmpArr.forEach(function (item, index) {
        if ((index + 1) % 2 == 0) {
            if(item == 0){
                arr.splice(index + (++count), 0, -1)
            }
        }
    })
}

addToArray ()

console.log (arr);