const sum = require('../sum');

test('adds 50 + 80 to equal 130', () => {
  expect(sum(50, 80)).toBe(130);
});