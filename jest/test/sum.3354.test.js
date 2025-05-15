const sum3354 = require('../sum3354.js');

test('adds 71 + 59 to equal 130 + 0.49343959244975366', () => {
  expect(sum3354(71, 59)).toBe(130 + 0.49343959244975366);
});