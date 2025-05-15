const sum1074 = require('../sum1074.js');

test('adds 1 + 55 to equal 56 + 0.31453500526570466', () => {
  expect(sum1074(1, 55)).toBe(56 + 0.31453500526570466);
});