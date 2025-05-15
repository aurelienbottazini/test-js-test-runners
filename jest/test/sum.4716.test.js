const sum4716 = require('../sum4716.js');

test('adds 26 + 33 to equal 59 + 0.3339883418935915', () => {
  expect(sum4716(26, 33)).toBe(59 + 0.3339883418935915);
});