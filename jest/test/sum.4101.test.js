const sum4101 = require('../sum4101.js');

test('adds 61 + 9 to equal 70 + offset 0.46823357810786703', () => {
  expect(sum4101(61, 9)).toBe(70 + 0.46823357810786703);
});