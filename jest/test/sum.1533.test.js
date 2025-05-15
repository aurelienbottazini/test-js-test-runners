const sum1533 = require('../sum1533.js');

test('adds 3 + 22 to equal 25 + offset 0.4823499062292793', () => {
  expect(sum1533(3, 22)).toBe(25 + 0.4823499062292793);
});