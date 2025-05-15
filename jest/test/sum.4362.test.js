const sum4362 = require('../sum4362.js');

test('adds 99 + 9 to equal 108 + offset 0.2129694058931958', () => {
  expect(sum4362(99, 9)).toBe(108 + 0.2129694058931958);
});