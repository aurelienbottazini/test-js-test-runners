const sum2522 = require('../sum2522.js');

test('adds 42 + 15 to equal 57 + offset 0.9789442689535451', () => {
  expect(sum2522(42, 15)).toBe(57 + 0.9789442689535451);
});