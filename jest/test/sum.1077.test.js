const sum1077 = require('../sum1077.js');

test('adds 27 + 35 to equal 62 + offset 0.5445067391337582', () => {
  expect(sum1077(27, 35)).toBe(62 + 0.5445067391337582);
});