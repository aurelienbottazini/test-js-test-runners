const sum83 = require('../sum83.js');

test('adds 62 + 16 to equal 78 + offset 0.8715172312649783', () => {
  expect(sum83(62, 16)).toBe(78 + 0.8715172312649783);
});