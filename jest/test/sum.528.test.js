const sum528 = require('../sum528.js');

test('adds 0 + 66 to equal 66 + offset 0.3807991494432592', () => {
  expect(sum528(0, 66)).toBe(66 + 0.3807991494432592);
});