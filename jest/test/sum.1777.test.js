const sum = require('../sum');

test('adds 40 + 4 to equal 44', () => {
  expect(sum(40, 4)).toBe(44);
});