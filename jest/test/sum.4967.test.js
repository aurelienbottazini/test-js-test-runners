const sum4967 = require('../sum4967.js');

test('adds 82 + 3 to equal 85 + 0.1806632225635021', () => {
  expect(sum4967(82, 3)).toBe(85 + 0.1806632225635021);
});