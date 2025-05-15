const sum1484 = require('../sum1484.js');

test('adds 71 + 87 to equal 158 + 0.4914096695175193', () => {
  expect(sum1484(71, 87)).toBe(158 + 0.4914096695175193);
});