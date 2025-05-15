const sum = require('../sum');

test('adds 78 + 4 to equal 82', () => {
  expect(sum(78, 4)).toBe(82);
});