const sum3718 = require('../sum3718.js');

test('adds 16 + 67 to equal 83 + offset 0.3042826410916475', () => {
  expect(sum3718(16, 67)).toBe(83 + 0.3042826410916475);
});