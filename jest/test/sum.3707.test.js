const sum3707 = require('../sum3707.js');

test('adds 35 + 40 to equal 75 + 0.8377064371474063', () => {
  expect(sum3707(35, 40)).toBe(75 + 0.8377064371474063);
});