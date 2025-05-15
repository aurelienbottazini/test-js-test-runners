const sum3084 = require('../sum3084.js');

test('adds 16 + 67 to equal 83 + 0.4872775056327844', () => {
  expect(sum3084(16, 67)).toBe(83 + 0.4872775056327844);
});