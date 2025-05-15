const sum992 = require('../sum992.js');

test('adds 9 + 28 to equal 37 + 0.7225950842887587', () => {
  expect(sum992(9, 28)).toBe(37 + 0.7225950842887587);
});