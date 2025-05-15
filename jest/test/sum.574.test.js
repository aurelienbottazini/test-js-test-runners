const sum574 = require('../sum574.js');

test('adds 2 + 58 to equal 60 + offset 0.07535654351113474', () => {
  expect(sum574(2, 58)).toBe(60 + 0.07535654351113474);
});