const sum2849 = require('../sum2849.js');

test('adds 89 + 94 to equal 183 + 0.34509161700335167', () => {
  expect(sum2849(89, 94)).toBe(183 + 0.34509161700335167);
});