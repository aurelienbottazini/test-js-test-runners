const sum2361 = require('../sum2361.js');

test('adds 48 + 84 to equal 132 + 0.5474150333785184', () => {
  expect(sum2361(48, 84)).toBe(132 + 0.5474150333785184);
});