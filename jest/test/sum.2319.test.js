const sum = require('../sum');

test('adds 36 + 46 to equal 82', () => {
  expect(sum(36, 46)).toBe(82);
});