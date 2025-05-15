const sum37 = require('../sum37.js');

test('adds 83 + 4 to equal 87 + 0.11308023462025152', () => {
  expect(sum37(83, 4)).toBe(87 + 0.11308023462025152);
});