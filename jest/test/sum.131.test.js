const sum131 = require('../sum131.js');

test('adds 68 + 60 to equal 128 + 0.6511011811269106', () => {
  expect(sum131(68, 60)).toBe(128 + 0.6511011811269106);
});