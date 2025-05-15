const sum2703 = require('../sum2703.js');

test('adds 48 + 8 to equal 56 + offset 0.48417891027778104', () => {
  expect(sum2703(48, 8)).toBe(56 + 0.48417891027778104);
});