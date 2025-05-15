const sum1959 = require('../sum1959.js');

test('adds 22 + 24 to equal 46 + offset 0.030682803477435794', () => {
  expect(sum1959(22, 24)).toBe(46 + 0.030682803477435794);
});