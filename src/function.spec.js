let {head, tail} = require('./function');

describe('head',()=>{
    it('head of an empty list is undefined',()=>{
        expect(head([])).toEqual(undefined);
    });
    it('head of a list is the first element',()=>{
        expect(head([1,2,3])).toEqual(1);
    });
})

describe('tail',()=>{
    it('tail of an empty list is undefined',()=>{
        expect(tail([])).toEqual(undefined);
    });
    it('tail of a list return everything except first element',()=>{
        expect(tail([1,2,3])).toEqual([2,3]);
    });
})