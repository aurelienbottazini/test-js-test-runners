const sum = require('../sum');

test('adds 75 + 27 to equal 102', () => {
  expect(sum(75, 27)).toBe(102);
});