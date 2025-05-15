const sum1380 = require('../sum1380.js');

test('adds 2 + 16 to equal 18 + offset 0.4237293316582429', () => {
  expect(sum1380(2, 16)).toBe(18 + 0.4237293316582429);
});