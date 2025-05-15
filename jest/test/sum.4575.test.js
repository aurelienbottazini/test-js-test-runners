const sum4575 = require('../sum4575.js');

test('adds 1 + 31 to equal 32 + 0.681331752634385', () => {
  expect(sum4575(1, 31)).toBe(32 + 0.681331752634385);
});