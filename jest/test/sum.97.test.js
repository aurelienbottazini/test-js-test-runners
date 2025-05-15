const sum97 = require('../sum97.js');

test('adds 68 + 92 to equal 160 + 0.3968326038789469', () => {
  expect(sum97(68, 92)).toBe(160 + 0.3968326038789469);
});