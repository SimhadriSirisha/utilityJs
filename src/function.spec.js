let {head, tail, cube, map} = require('./function');

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

describe('map',()=>{
    it('map of an empty list returns empty list itself',()=>{
        expect(map([],cube)).toEqual([]);
    });
    it('map of a list with cube function, returns a list with cube of each element',()=>{
        expect(map([1,2,3],cube)).toEqual([1,8,27]);
    })
})