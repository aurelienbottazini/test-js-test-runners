const sum = require('../sum');

test('adds 85 + 90 to equal 175', () => {
  expect(sum(85, 90)).toBe(175);
});