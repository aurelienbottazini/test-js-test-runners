const sum1388 = require('../sum1388.js');

test('adds 47 + 58 to equal 105 + 0.1821065860588823', () => {
  expect(sum1388(47, 58)).toBe(105 + 0.1821065860588823);
});