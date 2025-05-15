const sum4724 = require('../sum4724.js');

test('adds 50 + 76 to equal 126 + 0.29204106757521886', () => {
  expect(sum4724(50, 76)).toBe(126 + 0.29204106757521886);
});