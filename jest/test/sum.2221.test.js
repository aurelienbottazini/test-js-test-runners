const sum2221 = require('../sum2221.js');

test('adds 81 + 1 to equal 82 + 0.18870270108974363', () => {
  expect(sum2221(81, 1)).toBe(82 + 0.18870270108974363);
});