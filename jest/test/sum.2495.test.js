const sum = require('../sum');

test('adds 82 + 59 to equal 141', () => {
  expect(sum(82, 59)).toBe(141);
});