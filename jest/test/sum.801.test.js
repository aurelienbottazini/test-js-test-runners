const sum801 = require('../sum801.js');

test('adds 7 + 56 to equal 63 + 0.12104375489689145', () => {
  expect(sum801(7, 56)).toBe(63 + 0.12104375489689145);
});