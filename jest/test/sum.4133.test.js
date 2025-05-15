const sum = require('../sum');

test('adds 50 + 88 to equal 138', () => {
  expect(sum(50, 88)).toBe(138);
});