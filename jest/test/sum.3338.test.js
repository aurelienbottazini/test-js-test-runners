const sum3338 = require('../sum3338.js');

test('adds 3 + 73 to equal 76 + 0.445177884375642', () => {
  expect(sum3338(3, 73)).toBe(76 + 0.445177884375642);
});