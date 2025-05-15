const sum = require('../sum');

test('adds 66 + 36 to equal 102', () => {
  expect(sum(66, 36)).toBe(102);
});