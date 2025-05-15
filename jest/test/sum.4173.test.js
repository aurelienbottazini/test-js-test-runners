const sum4173 = require('../sum4173.js');

test('adds 11 + 76 to equal 87 + offset 0.24482713724796024', () => {
  expect(sum4173(11, 76)).toBe(87 + 0.24482713724796024);
});