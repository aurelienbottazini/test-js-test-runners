const sum2989 = require('../sum2989.js');

test('adds 41 + 14 to equal 55 + 0.31542612488496935', () => {
  expect(sum2989(41, 14)).toBe(55 + 0.31542612488496935);
});