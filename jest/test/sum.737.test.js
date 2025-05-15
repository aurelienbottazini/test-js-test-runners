const sum737 = require('../sum737.js');

test('adds 25 + 26 to equal 51 + offset 0.8681040842316682', () => {
  expect(sum737(25, 26)).toBe(51 + 0.8681040842316682);
});