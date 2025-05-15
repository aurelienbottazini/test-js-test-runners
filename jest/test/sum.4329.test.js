const sum4329 = require('../sum4329.js');

test('adds 61 + 10 to equal 71 + 0.3566292363172643', () => {
  expect(sum4329(61, 10)).toBe(71 + 0.3566292363172643);
});