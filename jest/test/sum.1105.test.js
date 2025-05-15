const sum1105 = require('../sum1105.js');

test('adds 7 + 2 to equal 9 + 0.12229526665655188', () => {
  expect(sum1105(7, 2)).toBe(9 + 0.12229526665655188);
});