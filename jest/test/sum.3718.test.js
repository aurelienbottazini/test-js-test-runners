const sum3718 = require('../sum3718.js');

test('adds 16 + 40 to equal 56 + 0.6677392595725613', () => {
  expect(sum3718(16, 40)).toBe(56 + 0.6677392595725613);
});