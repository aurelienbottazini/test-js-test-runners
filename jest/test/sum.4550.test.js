const sum4550 = require('../sum4550.js');

test('adds 16 + 28 to equal 44 + offset 0.8117673018710622', () => {
  expect(sum4550(16, 28)).toBe(44 + 0.8117673018710622);
});