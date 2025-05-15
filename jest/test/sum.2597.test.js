const sum2597 = require('../sum2597.js');

test('adds 99 + 61 to equal 160 + offset 0.8415934703932946', () => {
  expect(sum2597(99, 61)).toBe(160 + 0.8415934703932946);
});