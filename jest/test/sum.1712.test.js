const sum1712 = require('../sum1712.js');

test('adds 65 + 4 to equal 69 + offset 0.2375250603249397', () => {
  expect(sum1712(65, 4)).toBe(69 + 0.2375250603249397);
});