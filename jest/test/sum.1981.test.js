const sum = require('../sum');

test('adds 13 + 74 to equal 87', () => {
  expect(sum(13, 74)).toBe(87);
});