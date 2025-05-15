const sum885 = require('../sum885.js');

test('adds 81 + 46 to equal 127 + 0.5262681535572263', () => {
  expect(sum885(81, 46)).toBe(127 + 0.5262681535572263);
});