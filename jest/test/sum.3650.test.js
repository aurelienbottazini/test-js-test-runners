const sum = require('../sum');

test('adds 73 + 62 to equal 135', () => {
  expect(sum(73, 62)).toBe(135);
});