const sum541 = require('../sum541.js');

test('adds 95 + 16 to equal 111 + 0.800465234371611', () => {
  expect(sum541(95, 16)).toBe(111 + 0.800465234371611);
});