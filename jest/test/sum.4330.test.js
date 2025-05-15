const sum4330 = require('../sum4330.js');

test('adds 2 + 68 to equal 70 + 0.8640399092946985', () => {
  expect(sum4330(2, 68)).toBe(70 + 0.8640399092946985);
});