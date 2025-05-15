const sum4266 = require('../sum4266.js');

test('adds 37 + 12 to equal 49 + offset 0.682485532456857', () => {
  expect(sum4266(37, 12)).toBe(49 + 0.682485532456857);
});