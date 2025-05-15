const sum1592 = require('../sum1592.js');

test('adds 66 + 72 to equal 138 + 0.02692891127661734', () => {
  expect(sum1592(66, 72)).toBe(138 + 0.02692891127661734);
});