const sum1318 = require('../sum1318.js');

test('adds 93 + 9 to equal 102 + offset 0.766341464372233', () => {
  expect(sum1318(93, 9)).toBe(102 + 0.766341464372233);
});