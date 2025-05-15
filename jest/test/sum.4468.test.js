const sum4468 = require('../sum4468.js');

test('adds 77 + 26 to equal 103 + offset 0.4202119035125419', () => {
  expect(sum4468(77, 26)).toBe(103 + 0.4202119035125419);
});