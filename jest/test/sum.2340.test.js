const sum = require('../sum');

test('adds 43 + 59 to equal 102', () => {
  expect(sum(43, 59)).toBe(102);
});