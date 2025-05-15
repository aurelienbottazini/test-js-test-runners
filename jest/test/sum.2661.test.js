const sum = require('../sum');

test('adds 66 + 2 to equal 68', () => {
  expect(sum(66, 2)).toBe(68);
});