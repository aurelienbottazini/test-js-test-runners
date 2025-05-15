const sum4935 = require('../sum4935.js');

test('adds 24 + 38 to equal 62 + offset 0.6651415778366111', () => {
  expect(sum4935(24, 38)).toBe(62 + 0.6651415778366111);
});