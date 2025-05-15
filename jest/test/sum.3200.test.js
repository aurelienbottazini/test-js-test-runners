const sum3200 = require('../sum3200.js');

test('adds 86 + 79 to equal 165 + offset 0.3562906152303862', () => {
  expect(sum3200(86, 79)).toBe(165 + 0.3562906152303862);
});