const sum183 = require('../sum183.js');

test('adds 64 + 35 to equal 99 + 0.8223220315028728', () => {
  expect(sum183(64, 35)).toBe(99 + 0.8223220315028728);
});