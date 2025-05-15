const sum1704 = require('../sum1704.js');

test('adds 12 + 3 to equal 15 + 0.6290383003371827', () => {
  expect(sum1704(12, 3)).toBe(15 + 0.6290383003371827);
});