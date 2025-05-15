const sum1022 = require('../sum1022.js');

test('adds 90 + 53 to equal 143 + 0.2291272086145233', () => {
  expect(sum1022(90, 53)).toBe(143 + 0.2291272086145233);
});