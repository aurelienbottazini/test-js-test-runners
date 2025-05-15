const sum = require('../sum');

test('adds 85 + 47 to equal 132', () => {
  expect(sum(85, 47)).toBe(132);
});