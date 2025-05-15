const sum712 = require('../sum712.js');

test('adds 68 + 12 to equal 80 + 0.1127595511509113', () => {
  expect(sum712(68, 12)).toBe(80 + 0.1127595511509113);
});