const sum = require('../sum');

test('adds 15 + 25 to equal 40', () => {
  expect(sum(15, 25)).toBe(40);
});