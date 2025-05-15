const sum3277 = require('../sum3277.js');

test('adds 81 + 10 to equal 91 + offset 0.622975746676515', () => {
  expect(sum3277(81, 10)).toBe(91 + 0.622975746676515);
});