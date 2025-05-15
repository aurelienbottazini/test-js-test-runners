const sum173 = require('../sum173.js');

test('adds 34 + 64 to equal 98 + 0.8016516267186254', () => {
  expect(sum173(34, 64)).toBe(98 + 0.8016516267186254);
});