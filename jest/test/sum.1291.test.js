const sum1291 = require('../sum1291.js');

test('adds 94 + 60 to equal 154 + offset 0.9805478542119888', () => {
  expect(sum1291(94, 60)).toBe(154 + 0.9805478542119888);
});