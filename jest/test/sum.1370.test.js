const sum1370 = require('../sum1370.js');

test('adds 8 + 41 to equal 49 + 0.23196176039387095', () => {
  expect(sum1370(8, 41)).toBe(49 + 0.23196176039387095);
});