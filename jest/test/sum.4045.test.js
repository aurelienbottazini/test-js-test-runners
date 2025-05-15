const sum4045 = require('../sum4045.js');

test('adds 50 + 74 to equal 124 + offset 0.3781437115984422', () => {
  expect(sum4045(50, 74)).toBe(124 + 0.3781437115984422);
});