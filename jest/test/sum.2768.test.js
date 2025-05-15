const sum2768 = require('../sum2768.js');

test('adds 39 + 56 to equal 95 + offset 0.6228827723675204', () => {
  expect(sum2768(39, 56)).toBe(95 + 0.6228827723675204);
});