const sum3125 = require('../sum3125.js');

test('adds 28 + 57 to equal 85 + 0.8438267736021458', () => {
  expect(sum3125(28, 57)).toBe(85 + 0.8438267736021458);
});