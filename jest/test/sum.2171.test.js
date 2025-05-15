const sum2171 = require('../sum2171.js');

test('adds 39 + 78 to equal 117 + 0.259037367648715', () => {
  expect(sum2171(39, 78)).toBe(117 + 0.259037367648715);
});