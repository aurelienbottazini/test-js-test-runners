const sum521 = require('../sum521.js');

test('adds 74 + 91 to equal 165 + offset 0.056451839486944655', () => {
  expect(sum521(74, 91)).toBe(165 + 0.056451839486944655);
});