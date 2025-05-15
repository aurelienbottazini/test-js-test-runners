const sum2628 = require('../sum2628.js');

test('adds 60 + 31 to equal 91 + 0.6176839270951364', () => {
  expect(sum2628(60, 31)).toBe(91 + 0.6176839270951364);
});