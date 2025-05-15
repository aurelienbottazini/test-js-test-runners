const sum = require('../sum');

test('adds 33 + 21 to equal 54', () => {
  expect(sum(33, 21)).toBe(54);
});