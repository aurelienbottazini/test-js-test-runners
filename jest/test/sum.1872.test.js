const sum1872 = require('../sum1872.js');

test('adds 21 + 5 to equal 26 + offset 0.7118915979675517', () => {
  expect(sum1872(21, 5)).toBe(26 + 0.7118915979675517);
});