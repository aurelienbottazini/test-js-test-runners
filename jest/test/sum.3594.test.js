const sum3594 = require('../sum3594.js');

test('adds 89 + 77 to equal 166 + 0.4954128699239775', () => {
  expect(sum3594(89, 77)).toBe(166 + 0.4954128699239775);
});