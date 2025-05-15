const sum51 = require('../sum51.js');

test('adds 27 + 37 to equal 64 + 0.24810220593256804', () => {
  expect(sum51(27, 37)).toBe(64 + 0.24810220593256804);
});