const sum493 = require('../sum493.js');

test('adds 85 + 68 to equal 153 + offset 0.2596267714609193', () => {
  expect(sum493(85, 68)).toBe(153 + 0.2596267714609193);
});