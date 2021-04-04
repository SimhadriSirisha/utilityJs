let {head} = require('./function');

describe('head',()=>{
    it('head of an empty list is undefined',()=>{
        expect(head([])).toEqual(undefined);
    });
    it('head of a list is the first element',()=>{
        expect(head([1,2,3])).toEqual(1);
    });
})