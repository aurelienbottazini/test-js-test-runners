const sum2409 = require('../sum2409.js');

test('adds 4 + 87 to equal 91 + offset 0.10994004502453691', () => {
  expect(sum2409(4, 87)).toBe(91 + 0.10994004502453691);
});