const sum = require('../sum');

test('adds 92 + 43 to equal 135', () => {
  expect(sum(92, 43)).toBe(135);
});