module.exports = {
    head: (arrayEle) => {
        if(arrayEle.length == 0) return undefined;
        return arrayEle[0];
    }
}