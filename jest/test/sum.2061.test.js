const sum2061 = require('../sum2061.js');

test('adds 47 + 56 to equal 103 + offset 0.37737173399006696', () => {
  expect(sum2061(47, 56)).toBe(103 + 0.37737173399006696);
});