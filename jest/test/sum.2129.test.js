const sum2129 = require('../sum2129.js');

test('adds 70 + 52 to equal 122 + 0.8466755072288298', () => {
  expect(sum2129(70, 52)).toBe(122 + 0.8466755072288298);
});