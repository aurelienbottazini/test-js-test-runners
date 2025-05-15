const sum1425 = require('../sum1425.js');

test('adds 96 + 33 to equal 129 + offset 0.12148448676057577', () => {
  expect(sum1425(96, 33)).toBe(129 + 0.12148448676057577);
});