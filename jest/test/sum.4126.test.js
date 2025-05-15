const sum4126 = require('../sum4126.js');

test('adds 33 + 43 to equal 76 + 0.7419154175598422', () => {
  expect(sum4126(33, 43)).toBe(76 + 0.7419154175598422);
});