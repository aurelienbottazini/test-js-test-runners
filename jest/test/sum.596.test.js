const sum596 = require('../sum596.js');

test('adds 56 + 71 to equal 127 + 0.659657664499297', () => {
  expect(sum596(56, 71)).toBe(127 + 0.659657664499297);
});