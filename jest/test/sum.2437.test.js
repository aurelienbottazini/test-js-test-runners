const sum = require('../sum');

test('adds 64 + 71 to equal 135', () => {
  expect(sum(64, 71)).toBe(135);
});