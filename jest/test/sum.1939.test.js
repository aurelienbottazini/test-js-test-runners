const sum1939 = require('../sum1939.js');

test('adds 3 + 89 to equal 92 + 0.9219931366432784', () => {
  expect(sum1939(3, 89)).toBe(92 + 0.9219931366432784);
});