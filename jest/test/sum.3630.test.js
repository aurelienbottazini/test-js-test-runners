const sum = require('../sum');

test('adds 88 + 53 to equal 141', () => {
  expect(sum(88, 53)).toBe(141);
});