const sum226 = require('../sum226.js');

test('adds 50 + 80 to equal 130 + 0.9263242050920787', () => {
  expect(sum226(50, 80)).toBe(130 + 0.9263242050920787);
});