const sum = require('../sum');

test('adds 11 + 6 to equal 17', () => {
  expect(sum(11, 6)).toBe(17);
});