const sum1766 = require('../sum1766.js');

test('adds 32 + 18 to equal 50 + 0.5264333465661181', () => {
  expect(sum1766(32, 18)).toBe(50 + 0.5264333465661181);
});