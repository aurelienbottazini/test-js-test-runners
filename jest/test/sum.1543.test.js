const sum1543 = require('../sum1543.js');

test('adds 15 + 95 to equal 110 + 0.8720140512529426', () => {
  expect(sum1543(15, 95)).toBe(110 + 0.8720140512529426);
});