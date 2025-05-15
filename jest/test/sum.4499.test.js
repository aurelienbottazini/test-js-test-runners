const sum = require('../sum');

test('adds 53 + 88 to equal 141', () => {
  expect(sum(53, 88)).toBe(141);
});