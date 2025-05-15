const sum155 = require('../sum155.js');

test('adds 25 + 45 to equal 70 + 0.6086450419175521', () => {
  expect(sum155(25, 45)).toBe(70 + 0.6086450419175521);
});