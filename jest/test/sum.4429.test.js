const sum4429 = require('../sum4429.js');

test('adds 70 + 43 to equal 113 + 0.8311004708759452', () => {
  expect(sum4429(70, 43)).toBe(113 + 0.8311004708759452);
});