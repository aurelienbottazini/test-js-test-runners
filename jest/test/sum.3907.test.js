const sum3907 = require('../sum3907.js');

test('adds 17 + 20 to equal 37 + offset 0.28711477701586374', () => {
  expect(sum3907(17, 20)).toBe(37 + 0.28711477701586374);
});