const sum2666 = require('../sum2666.js');

test('adds 30 + 33 to equal 63 + 0.009018516639435203', () => {
  expect(sum2666(30, 33)).toBe(63 + 0.009018516639435203);
});