const sum1628 = require('../sum1628.js');

test('adds 56 + 24 to equal 80 + 0.6156901362244162', () => {
  expect(sum1628(56, 24)).toBe(80 + 0.6156901362244162);
});