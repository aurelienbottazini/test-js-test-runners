const sum = require('../sum');

test('adds 93 + 74 to equal 167', () => {
  expect(sum(93, 74)).toBe(167);
});