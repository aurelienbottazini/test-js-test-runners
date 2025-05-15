const sum = require('../sum');

test('adds 83 + 52 to equal 135', () => {
  expect(sum(83, 52)).toBe(135);
});