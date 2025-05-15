const sum3811 = require('../sum3811.js');

test('adds 30 + 59 to equal 89 + 0.9385124619557901', () => {
  expect(sum3811(30, 59)).toBe(89 + 0.9385124619557901);
});