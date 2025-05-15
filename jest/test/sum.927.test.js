const sum927 = require('../sum927.js');

test('adds 15 + 48 to equal 63 + offset 0.5203108609290974', () => {
  expect(sum927(15, 48)).toBe(63 + 0.5203108609290974);
});