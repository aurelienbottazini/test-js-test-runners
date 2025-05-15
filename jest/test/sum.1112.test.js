const sum1112 = require('../sum1112.js');

test('adds 46 + 43 to equal 89 + offset 0.8807618585439295', () => {
  expect(sum1112(46, 43)).toBe(89 + 0.8807618585439295);
});