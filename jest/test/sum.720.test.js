const sum720 = require('../sum720.js');

test('adds 34 + 44 to equal 78 + offset 0.9442200470092672', () => {
  expect(sum720(34, 44)).toBe(78 + 0.9442200470092672);
});