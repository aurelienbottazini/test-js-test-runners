const sum3303 = require('../sum3303.js');

test('adds 57 + 66 to equal 123 + 0.7954292235462096', () => {
  expect(sum3303(57, 66)).toBe(123 + 0.7954292235462096);
});