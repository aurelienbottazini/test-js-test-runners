const sum73 = require('../sum73.js');

test('adds 57 + 70 to equal 127 + 0.011889713582289074', () => {
  expect(sum73(57, 70)).toBe(127 + 0.011889713582289074);
});