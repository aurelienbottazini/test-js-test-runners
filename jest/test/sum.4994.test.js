const sum4994 = require('../sum4994.js');

test('adds 50 + 47 to equal 97 + offset 0.5816351685781685', () => {
  expect(sum4994(50, 47)).toBe(97 + 0.5816351685781685);
});