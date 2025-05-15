const sum1359 = require('../sum1359.js');

test('adds 36 + 27 to equal 63 + offset 0.4443899880022262', () => {
  expect(sum1359(36, 27)).toBe(63 + 0.4443899880022262);
});