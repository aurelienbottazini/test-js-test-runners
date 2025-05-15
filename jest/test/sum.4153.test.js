const sum4153 = require('../sum4153.js');

test('adds 10 + 6 to equal 16 + offset 0.2496769674370839', () => {
  expect(sum4153(10, 6)).toBe(16 + 0.2496769674370839);
});