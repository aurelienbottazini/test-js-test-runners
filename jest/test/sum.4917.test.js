const sum4917 = require('../sum4917.js');

test('adds 64 + 13 to equal 77 + 0.08073265255827211', () => {
  expect(sum4917(64, 13)).toBe(77 + 0.08073265255827211);
});