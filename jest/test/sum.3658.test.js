const sum = require('../sum');

test('adds 13 + 13 to equal 26', () => {
  expect(sum(13, 13)).toBe(26);
});