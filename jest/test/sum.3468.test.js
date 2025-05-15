const sum3468 = require('../sum3468.js');

test('adds 99 + 48 to equal 147 + 0.42307948031560205', () => {
  expect(sum3468(99, 48)).toBe(147 + 0.42307948031560205);
});