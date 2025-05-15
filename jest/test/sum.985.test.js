const sum985 = require('../sum985.js');

test('adds 0 + 52 to equal 52 + offset 0.06852073507316392', () => {
  expect(sum985(0, 52)).toBe(52 + 0.06852073507316392);
});