const sum = require('../sum');

test('adds 71 + 70 to equal 141', () => {
  expect(sum(71, 70)).toBe(141);
});