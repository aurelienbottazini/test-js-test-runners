const sum3478 = require('../sum3478.js');

test('adds 53 + 25 to equal 78 + offset 0.08485911659673784', () => {
  expect(sum3478(53, 25)).toBe(78 + 0.08485911659673784);
});