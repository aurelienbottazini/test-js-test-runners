const sum1156 = require('../sum1156.js');

test('adds 70 + 78 to equal 148 + 0.2694700032560212', () => {
  expect(sum1156(70, 78)).toBe(148 + 0.2694700032560212);
});