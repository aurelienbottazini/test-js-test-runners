const sum4394 = require('../sum4394.js');

test('adds 95 + 45 to equal 140 + 0.9286720193036835', () => {
  expect(sum4394(95, 45)).toBe(140 + 0.9286720193036835);
});