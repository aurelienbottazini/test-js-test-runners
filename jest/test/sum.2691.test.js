const sum2691 = require('../sum2691.js');

test('adds 95 + 33 to equal 128 + offset 0.5185268080126809', () => {
  expect(sum2691(95, 33)).toBe(128 + 0.5185268080126809);
});