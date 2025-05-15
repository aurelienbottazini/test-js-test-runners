const sum = require('../sum');

test('adds 76 + 65 to equal 141', () => {
  expect(sum(76, 65)).toBe(141);
});