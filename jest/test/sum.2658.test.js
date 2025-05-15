const sum2658 = require('../sum2658.js');

test('adds 33 + 27 to equal 60 + 0.004504092562934825', () => {
  expect(sum2658(33, 27)).toBe(60 + 0.004504092562934825);
});