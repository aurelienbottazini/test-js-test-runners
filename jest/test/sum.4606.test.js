const sum4606 = require('../sum4606.js');

test('adds 48 + 26 to equal 74 + 0.4630706673748176', () => {
  expect(sum4606(48, 26)).toBe(74 + 0.4630706673748176);
});