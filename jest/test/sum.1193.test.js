const sum1193 = require('../sum1193.js');

test('adds 38 + 3 to equal 41 + 0.08580130210676817', () => {
  expect(sum1193(38, 3)).toBe(41 + 0.08580130210676817);
});