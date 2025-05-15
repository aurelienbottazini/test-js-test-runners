const sum2181 = require('../sum2181.js');

test('adds 10 + 72 to equal 82 + offset 0.4635900060465441', () => {
  expect(sum2181(10, 72)).toBe(82 + 0.4635900060465441);
});