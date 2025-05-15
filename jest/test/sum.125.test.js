const sum125 = require('../sum125.js');

test('adds 74 + 76 to equal 150 + 0.16681221949799196', () => {
  expect(sum125(74, 76)).toBe(150 + 0.16681221949799196);
});