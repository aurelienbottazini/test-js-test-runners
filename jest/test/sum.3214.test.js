const sum3214 = require('../sum3214.js');

test('adds 92 + 79 to equal 171 + offset 0.7019634929485767', () => {
  expect(sum3214(92, 79)).toBe(171 + 0.7019634929485767);
});