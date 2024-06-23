import { range, pluck } from './utils'

describe('utils', ()=>{
  describe('range', () => {
    it('return correct range from 1 to 5 ', () => {
      expect(range(1,5)).toEqual([1,2,3,4]);
    });
    it('return correct range from 44 to 49 ', () => {
      expect(range(44,49)).toEqual([44,45,46,47,48]);
    });
  });
  describe('pluck', () => {
    it('return correct result ', () => {
      const data = [
        { id: '1', name: 'foo'},
        { id: '2', name: 'foo'},
        { id: '3', name: 'foo'},
      ]
      expect(pluck(data, 'id')).toEqual(['1','2','3']);
    });
  });
});