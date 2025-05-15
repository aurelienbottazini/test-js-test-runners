const sum2346 = require('../sum2346.js');

test('adds 30 + 44 to equal 74 + 0.8798059766491058', () => {
  expect(sum2346(30, 44)).toBe(74 + 0.8798059766491058);
});