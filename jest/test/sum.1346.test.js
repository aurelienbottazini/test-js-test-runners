const sum1346 = require('../sum1346.js');

test('adds 73 + 30 to equal 103 + offset 0.3375755103283875', () => {
  expect(sum1346(73, 30)).toBe(103 + 0.3375755103283875);
});