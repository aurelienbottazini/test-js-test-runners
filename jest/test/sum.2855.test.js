const sum2855 = require('../sum2855.js');

test('adds 23 + 70 to equal 93 + 0.0861761093404868', () => {
  expect(sum2855(23, 70)).toBe(93 + 0.0861761093404868);
});