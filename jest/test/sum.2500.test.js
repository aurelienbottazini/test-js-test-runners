const sum2500 = require('../sum2500.js');

test('adds 57 + 68 to equal 125 + offset 0.3013462318032186', () => {
  expect(sum2500(57, 68)).toBe(125 + 0.3013462318032186);
});