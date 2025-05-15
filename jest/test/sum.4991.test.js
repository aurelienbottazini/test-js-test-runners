const sum4991 = require('../sum4991.js');

test('adds 90 + 45 to equal 135 + 0.015520643652344512', () => {
  expect(sum4991(90, 45)).toBe(135 + 0.015520643652344512);
});