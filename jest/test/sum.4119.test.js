const sum = require('../sum');

test('adds 93 + 48 to equal 141', () => {
  expect(sum(93, 48)).toBe(141);
});