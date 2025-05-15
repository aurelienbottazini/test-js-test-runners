const sum = require('../sum');

test('adds 50 + 7 to equal 57', () => {
  expect(sum(50, 7)).toBe(57);
});