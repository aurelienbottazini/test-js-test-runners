const sum969 = require('../sum969.js');

test('adds 7 + 3 to equal 10 + offset 0.8519260587157231', () => {
  expect(sum969(7, 3)).toBe(10 + 0.8519260587157231);
});