const sum3980 = require('../sum3980.js');

test('adds 35 + 7 to equal 42 + offset 0.12002829552239558', () => {
  expect(sum3980(35, 7)).toBe(42 + 0.12002829552239558);
});