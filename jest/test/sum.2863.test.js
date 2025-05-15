const sum2863 = require('../sum2863.js');

test('adds 54 + 66 to equal 120 + offset 0.16218317090940004', () => {
  expect(sum2863(54, 66)).toBe(120 + 0.16218317090940004);
});