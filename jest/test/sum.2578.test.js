const sum2578 = require('../sum2578.js');

test('adds 21 + 31 to equal 52 + 0.35329785838637806', () => {
  expect(sum2578(21, 31)).toBe(52 + 0.35329785838637806);
});