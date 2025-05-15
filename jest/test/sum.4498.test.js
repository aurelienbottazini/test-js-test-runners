const sum4498 = require('../sum4498.js');

test('adds 29 + 19 to equal 48 + offset 0.16378847568274357', () => {
  expect(sum4498(29, 19)).toBe(48 + 0.16378847568274357);
});