const sum1661 = require('../sum1661.js');

test('adds 13 + 94 to equal 107 + 0.9421398800207721', () => {
  expect(sum1661(13, 94)).toBe(107 + 0.9421398800207721);
});