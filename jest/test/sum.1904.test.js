const sum = require('../sum');

test('adds 13 + 55 to equal 68', () => {
  expect(sum(13, 55)).toBe(68);
});