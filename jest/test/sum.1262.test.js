const sum1262 = require('../sum1262.js');

test('adds 51 + 94 to equal 145 + 0.5891326552754999', () => {
  expect(sum1262(51, 94)).toBe(145 + 0.5891326552754999);
});