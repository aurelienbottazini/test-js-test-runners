const sum = require('../sum');

test('adds 93 + 90 to equal 183', () => {
  expect(sum(93, 90)).toBe(183);
});