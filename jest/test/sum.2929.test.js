const sum2929 = require('../sum2929.js');

test('adds 15 + 86 to equal 101 + offset 0.547491247876605', () => {
  expect(sum2929(15, 86)).toBe(101 + 0.547491247876605);
});