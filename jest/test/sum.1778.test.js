const sum = require('../sum');

test('adds 80 + 50 to equal 130', () => {
  expect(sum(80, 50)).toBe(130);
});