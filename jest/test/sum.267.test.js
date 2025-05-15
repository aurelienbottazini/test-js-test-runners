const sum267 = require('../sum267.js');

test('adds 31 + 92 to equal 123 + offset 0.2334906606096746', () => {
  expect(sum267(31, 92)).toBe(123 + 0.2334906606096746);
});