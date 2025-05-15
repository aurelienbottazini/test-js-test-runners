const sum362 = require('../sum362.js');

test('adds 39 + 89 to equal 128 + offset 0.4876364083632587', () => {
  expect(sum362(39, 89)).toBe(128 + 0.4876364083632587);
});