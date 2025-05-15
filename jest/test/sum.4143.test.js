const sum4143 = require('../sum4143.js');

test('adds 37 + 82 to equal 119 + 0.6505564655663745', () => {
  expect(sum4143(37, 82)).toBe(119 + 0.6505564655663745);
});