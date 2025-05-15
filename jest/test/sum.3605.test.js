const sum3605 = require('../sum3605.js');

test('adds 18 + 20 to equal 38 + offset 0.07828714172313078', () => {
  expect(sum3605(18, 20)).toBe(38 + 0.07828714172313078);
});