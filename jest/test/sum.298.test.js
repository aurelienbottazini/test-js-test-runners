const sum = require('../sum');

test('adds 90 + 93 to equal 183', () => {
  expect(sum(90, 93)).toBe(183);
});