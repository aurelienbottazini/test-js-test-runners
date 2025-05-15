const sum = require('../sum');

test('adds 13 + 35 to equal 48', () => {
  expect(sum(13, 35)).toBe(48);
});