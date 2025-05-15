const sum769 = require('../sum769.js');

test('adds 3 + 47 to equal 50 + offset 0.2724745520945555', () => {
  expect(sum769(3, 47)).toBe(50 + 0.2724745520945555);
});