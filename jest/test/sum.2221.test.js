const sum2221 = require('../sum2221.js');

test('adds 60 + 93 to equal 153 + offset 0.5472947243737671', () => {
  expect(sum2221(60, 93)).toBe(153 + 0.5472947243737671);
});