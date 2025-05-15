const sum3891 = require('../sum3891.js');

test('adds 72 + 97 to equal 169 + offset 0.43926825397208646', () => {
  expect(sum3891(72, 97)).toBe(169 + 0.43926825397208646);
});