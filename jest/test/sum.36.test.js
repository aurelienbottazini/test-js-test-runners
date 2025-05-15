const sum = require('../sum');

test('adds 90 + 88 to equal 178', () => {
  expect(sum(90, 88)).toBe(178);
});