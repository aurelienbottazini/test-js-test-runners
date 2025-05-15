const sum3407 = require('../sum3407.js');

test('adds 79 + 5 to equal 84 + 0.4525986544715691', () => {
  expect(sum3407(79, 5)).toBe(84 + 0.4525986544715691);
});