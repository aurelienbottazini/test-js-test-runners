const sum3703 = require('../sum3703.js');

test('adds 97 + 31 to equal 128 + 0.6754086038497594', () => {
  expect(sum3703(97, 31)).toBe(128 + 0.6754086038497594);
});