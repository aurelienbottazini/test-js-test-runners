const sum1270 = require('../sum1270.js');

test('adds 12 + 33 to equal 45 + 0.7417070606430511', () => {
  expect(sum1270(12, 33)).toBe(45 + 0.7417070606430511);
});