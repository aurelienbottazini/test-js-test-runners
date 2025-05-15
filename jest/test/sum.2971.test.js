const sum = require('../sum');

test('adds 75 + 55 to equal 130', () => {
  expect(sum(75, 55)).toBe(130);
});