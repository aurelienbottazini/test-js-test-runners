const sum4433 = require('../sum4433.js');

test('adds 53 + 87 to equal 140 + 0.964582636164912', () => {
  expect(sum4433(53, 87)).toBe(140 + 0.964582636164912);
});