const sum4177 = require('../sum4177.js');

test('adds 38 + 89 to equal 127 + offset 0.0017187022282532105', () => {
  expect(sum4177(38, 89)).toBe(127 + 0.0017187022282532105);
});