const sum3827 = require('../sum3827.js');

test('adds 20 + 86 to equal 106 + offset 0.7461288377648808', () => {
  expect(sum3827(20, 86)).toBe(106 + 0.7461288377648808);
});