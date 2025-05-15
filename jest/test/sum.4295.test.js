const sum4295 = require('../sum4295.js');

test('adds 15 + 18 to equal 33 + offset 0.8359852735831611', () => {
  expect(sum4295(15, 18)).toBe(33 + 0.8359852735831611);
});