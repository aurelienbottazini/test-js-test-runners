const sum3533 = require('../sum3533.js');

test('adds 92 + 87 to equal 179 + 0.5010945440316853', () => {
  expect(sum3533(92, 87)).toBe(179 + 0.5010945440316853);
});