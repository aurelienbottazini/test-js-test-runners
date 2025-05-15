const sum = require('../sum');

test('adds 30 + 72 to equal 102', () => {
  expect(sum(30, 72)).toBe(102);
});