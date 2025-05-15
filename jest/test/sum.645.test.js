const sum645 = require('../sum645.js');

test('adds 7 + 37 to equal 44 + 0.1289243010922263', () => {
  expect(sum645(7, 37)).toBe(44 + 0.1289243010922263);
});