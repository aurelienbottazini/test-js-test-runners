const sum2563 = require('../sum2563.js');

test('adds 89 + 94 to equal 183 + 0.3370194746037284', () => {
  expect(sum2563(89, 94)).toBe(183 + 0.3370194746037284);
});