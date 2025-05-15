const sum2113 = require('../sum2113.js');

test('adds 17 + 50 to equal 67 + offset 0.14858133230490755', () => {
  expect(sum2113(17, 50)).toBe(67 + 0.14858133230490755);
});