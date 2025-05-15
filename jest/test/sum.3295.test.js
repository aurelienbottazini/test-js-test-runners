const sum = require('../sum');

test('adds 15 + 75 to equal 90', () => {
  expect(sum(15, 75)).toBe(90);
});