const sum1207 = require('../sum1207.js');

test('adds 95 + 90 to equal 185 + offset 0.9685282571969307', () => {
  expect(sum1207(95, 90)).toBe(185 + 0.9685282571969307);
});