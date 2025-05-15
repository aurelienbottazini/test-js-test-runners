const sum1822 = require('../sum1822.js');

test('adds 46 + 19 to equal 65 + offset 0.03584781968962836', () => {
  expect(sum1822(46, 19)).toBe(65 + 0.03584781968962836);
});