const sum2979 = require('../sum2979.js');

test('adds 7 + 29 to equal 36 + 0.8377646873731791', () => {
  expect(sum2979(7, 29)).toBe(36 + 0.8377646873731791);
});