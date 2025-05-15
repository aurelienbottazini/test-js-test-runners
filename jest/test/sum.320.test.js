const sum320 = require('../sum320.js');

test('adds 91 + 50 to equal 141 + 0.9910664066750215', () => {
  expect(sum320(91, 50)).toBe(141 + 0.9910664066750215);
});