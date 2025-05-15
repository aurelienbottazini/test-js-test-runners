const sum = require('../sum');

test('adds 18 + 36 to equal 54', () => {
  expect(sum(18, 36)).toBe(54);
});