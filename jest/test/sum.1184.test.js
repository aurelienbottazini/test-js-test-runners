const sum1184 = require('../sum1184.js');

test('adds 71 + 93 to equal 164 + offset 0.008861941577811172', () => {
  expect(sum1184(71, 93)).toBe(164 + 0.008861941577811172);
});