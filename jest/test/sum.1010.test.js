const sum1010 = require('../sum1010.js');

test('adds 30 + 81 to equal 111 + 0.44135176237001006', () => {
  expect(sum1010(30, 81)).toBe(111 + 0.44135176237001006);
});