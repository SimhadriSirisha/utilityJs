module.exports = {
    head: (arrayEle) => {
        if(arrayEle.length == 0) return undefined;
        return arrayEle[0];
    },
    tail: (arr) => {
        if(arr.length == 0) return undefined;
        else{
            arr.shift();
            return arr;
        }
    }
}