const sum3517 = require('../sum3517.js');

test('adds 1 + 47 to equal 48 + offset 0.8081771972327565', () => {
  expect(sum3517(1, 47)).toBe(48 + 0.8081771972327565);
});