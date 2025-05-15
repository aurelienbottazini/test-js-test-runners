const sum3815 = require('../sum3815.js');

test('adds 21 + 88 to equal 109 + 0.033580167380356185', () => {
  expect(sum3815(21, 88)).toBe(109 + 0.033580167380356185);
});