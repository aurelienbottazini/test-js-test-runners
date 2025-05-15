const sum4228 = require('../sum4228.js');

test('adds 25 + 1 to equal 26 + 0.5985046452555692', () => {
  expect(sum4228(25, 1)).toBe(26 + 0.5985046452555692);
});