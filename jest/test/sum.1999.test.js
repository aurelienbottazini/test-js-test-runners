const sum1999 = require('../sum1999.js');

test('adds 41 + 68 to equal 109 + offset 0.6905068715538076', () => {
  expect(sum1999(41, 68)).toBe(109 + 0.6905068715538076);
});