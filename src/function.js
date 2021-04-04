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
    },
    cube: (ele) => {
        return ele*ele*ele;
    },
    map: (arr, op) => {
        if(arr.length == 0 ) return [];
        else{
            let res = [];
            performFunc(arr,op,res);
            console.log("result:",res);
            return res;
        }
    }
}

let performFunc = (arr,op,res) => {
    if(arr.length == 0)
        return;
    let ele = arr[0];
    ele = op(ele);
    arr.shift();
    res.push(ele);
    performFunc(arr,op,res);
}