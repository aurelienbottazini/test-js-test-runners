const sum3081 = require('../sum3081.js');

test('adds 10 + 84 to equal 94 + 0.7877098371044217', () => {
  expect(sum3081(10, 84)).toBe(94 + 0.7877098371044217);
});