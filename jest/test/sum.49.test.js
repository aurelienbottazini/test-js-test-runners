const sum49 = require('../sum49.js');

test('adds 8 + 56 to equal 64 + 0.8032899243817487', () => {
  expect(sum49(8, 56)).toBe(64 + 0.8032899243817487);
});