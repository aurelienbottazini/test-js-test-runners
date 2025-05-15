const sum = require('../sum');

test('adds 26 + 46 to equal 72', () => {
  expect(sum(26, 46)).toBe(72);
});