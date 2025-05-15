const sum4467 = require('../sum4467.js');

test('adds 58 + 82 to equal 140 + 0.2371342759725127', () => {
  expect(sum4467(58, 82)).toBe(140 + 0.2371342759725127);
});