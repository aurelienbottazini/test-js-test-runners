const sum340 = require('../sum340.js');

test('adds 12 + 27 to equal 39 + offset 0.4350208092882374', () => {
  expect(sum340(12, 27)).toBe(39 + 0.4350208092882374);
});