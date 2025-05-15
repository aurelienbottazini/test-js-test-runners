const sum1482 = require('../sum1482.js');

test('adds 35 + 71 to equal 106 + offset 0.7854004081439492', () => {
  expect(sum1482(35, 71)).toBe(106 + 0.7854004081439492);
});