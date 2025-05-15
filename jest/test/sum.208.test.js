const sum208 = require('../sum208.js');

test('adds 31 + 60 to equal 91 + offset 0.36358947388108775', () => {
  expect(sum208(31, 60)).toBe(91 + 0.36358947388108775);
});