const sum3591 = require('../sum3591.js');

test('adds 85 + 79 to equal 164 + offset 0.3915488074461646', () => {
  expect(sum3591(85, 79)).toBe(164 + 0.3915488074461646);
});