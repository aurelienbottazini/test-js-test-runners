const sum4937 = require('../sum4937.js');

test('adds 78 + 96 to equal 174 + 0.03973331554112236', () => {
  expect(sum4937(78, 96)).toBe(174 + 0.03973331554112236);
});