const sum917 = require('../sum917.js');

test('adds 70 + 56 to equal 126 + offset 0.8669053185786698', () => {
  expect(sum917(70, 56)).toBe(126 + 0.8669053185786698);
});