const sum4340 = require('../sum4340.js');

test('adds 76 + 0 to equal 76 + offset 0.9917491967763811', () => {
  expect(sum4340(76, 0)).toBe(76 + 0.9917491967763811);
});