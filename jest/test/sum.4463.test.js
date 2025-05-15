const sum = require('../sum');

test('adds 7 + 10 to equal 17', () => {
  expect(sum(7, 10)).toBe(17);
});