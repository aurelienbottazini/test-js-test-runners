const sum = require('../sum');

test('adds 88 + 47 to equal 135', () => {
  expect(sum(88, 47)).toBe(135);
});