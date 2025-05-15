const sum4324 = require('../sum4324.js');

test('adds 92 + 22 to equal 114 + 0.9311421194763845', () => {
  expect(sum4324(92, 22)).toBe(114 + 0.9311421194763845);
});