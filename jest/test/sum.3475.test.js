const sum3475 = require('../sum3475.js');

test('adds 96 + 51 to equal 147 + offset 0.24186698043185462', () => {
  expect(sum3475(96, 51)).toBe(147 + 0.24186698043185462);
});