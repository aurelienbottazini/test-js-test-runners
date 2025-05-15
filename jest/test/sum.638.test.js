const sum = require('../sum');

test('adds 6 + 11 to equal 17', () => {
  expect(sum(6, 11)).toBe(17);
});