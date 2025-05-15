const sum2129 = require('../sum2129.js');

test('adds 11 + 24 to equal 35 + offset 0.802527419142136', () => {
  expect(sum2129(11, 24)).toBe(35 + 0.802527419142136);
});