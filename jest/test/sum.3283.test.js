const sum = require('../sum');

test('adds 51 + 90 to equal 141', () => {
  expect(sum(51, 90)).toBe(141);
});