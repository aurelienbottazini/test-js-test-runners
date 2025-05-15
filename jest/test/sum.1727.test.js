const sum1727 = require('../sum1727.js');

test('adds 34 + 66 to equal 100 + offset 0.20886060856753186', () => {
  expect(sum1727(34, 66)).toBe(100 + 0.20886060856753186);
});