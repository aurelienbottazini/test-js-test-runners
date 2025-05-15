const sum2227 = require('../sum2227.js');

test('adds 83 + 30 to equal 113 + 0.3217072229626139', () => {
  expect(sum2227(83, 30)).toBe(113 + 0.3217072229626139);
});