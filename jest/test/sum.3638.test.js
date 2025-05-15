const sum3638 = require('../sum3638.js');

test('adds 65 + 10 to equal 75 + offset 0.38457046369582504', () => {
  expect(sum3638(65, 10)).toBe(75 + 0.38457046369582504);
});