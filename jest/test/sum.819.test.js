const sum819 = require('../sum819.js');

test('adds 42 + 61 to equal 103 + 0.5677949638376601', () => {
  expect(sum819(42, 61)).toBe(103 + 0.5677949638376601);
});