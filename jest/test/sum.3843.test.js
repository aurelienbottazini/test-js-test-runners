const sum = require('../sum');

test('adds 8 + 9 to equal 17', () => {
  expect(sum(8, 9)).toBe(17);
});