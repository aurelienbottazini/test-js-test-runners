const sum = require('../sum');

test('adds 27 + 27 to equal 54', () => {
  expect(sum(27, 27)).toBe(54);
});