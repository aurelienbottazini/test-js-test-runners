const sum4504 = require('../sum4504.js');

test('adds 21 + 77 to equal 98 + 0.8580840996597943', () => {
  expect(sum4504(21, 77)).toBe(98 + 0.8580840996597943);
});