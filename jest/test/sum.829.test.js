const sum829 = require('../sum829.js');

test('adds 4 + 37 to equal 41 + 0.8237211114980498', () => {
  expect(sum829(4, 37)).toBe(41 + 0.8237211114980498);
});