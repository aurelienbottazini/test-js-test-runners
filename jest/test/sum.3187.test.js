const sum = require('../sum');

test('adds 4 + 13 to equal 17', () => {
  expect(sum(4, 13)).toBe(17);
});