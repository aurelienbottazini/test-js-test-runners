const sum4437 = require('../sum4437.js');

test('adds 56 + 93 to equal 149 + 0.3192419568913717', () => {
  expect(sum4437(56, 93)).toBe(149 + 0.3192419568913717);
});