const sum3768 = require('../sum3768.js');

test('adds 45 + 83 to equal 128 + 0.5934441342820768', () => {
  expect(sum3768(45, 83)).toBe(128 + 0.5934441342820768);
});