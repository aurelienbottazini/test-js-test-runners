const sum3563 = require('../sum3563.js');

test('adds 19 + 54 to equal 73 + offset 0.2664272780140491', () => {
  expect(sum3563(19, 54)).toBe(73 + 0.2664272780140491);
});