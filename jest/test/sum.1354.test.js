const sum = require('../sum');

test('adds 70 + 47 to equal 117', () => {
  expect(sum(70, 47)).toBe(117);
});