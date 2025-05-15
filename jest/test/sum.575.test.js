const sum575 = require('../sum575.js');

test('adds 11 + 90 to equal 101 + offset 0.12047826266687867', () => {
  expect(sum575(11, 90)).toBe(101 + 0.12047826266687867);
});