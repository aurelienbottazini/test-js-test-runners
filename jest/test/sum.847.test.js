const sum847 = require('../sum847.js');

test('adds 38 + 60 to equal 98 + offset 0.7368654336139421', () => {
  expect(sum847(38, 60)).toBe(98 + 0.7368654336139421);
});