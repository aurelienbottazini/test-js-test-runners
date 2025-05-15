const sum = require('../sum');

test('adds 22 + 32 to equal 54', () => {
  expect(sum(22, 32)).toBe(54);
});