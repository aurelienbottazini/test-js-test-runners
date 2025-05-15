const sum1281 = require('../sum1281.js');

test('adds 75 + 45 to equal 120 + 0.8687658816358953', () => {
  expect(sum1281(75, 45)).toBe(120 + 0.8687658816358953);
});