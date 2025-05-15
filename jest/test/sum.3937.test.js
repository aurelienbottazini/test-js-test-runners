const sum3937 = require('../sum3937.js');

test('adds 80 + 11 to equal 91 + 0.7910815594302933', () => {
  expect(sum3937(80, 11)).toBe(91 + 0.7910815594302933);
});