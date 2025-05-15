const sum = require('../sum');

test('adds 71 + 47 to equal 118', () => {
  expect(sum(71, 47)).toBe(118);
});