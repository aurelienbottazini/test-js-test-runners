const sum246 = require('../sum246.js');

test('adds 65 + 62 to equal 127 + offset 0.5628960833305171', () => {
  expect(sum246(65, 62)).toBe(127 + 0.5628960833305171);
});