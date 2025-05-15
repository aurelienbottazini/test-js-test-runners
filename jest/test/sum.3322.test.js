const sum3322 = require('../sum3322.js');

test('adds 33 + 3 to equal 36 + offset 0.21482079142225885', () => {
  expect(sum3322(33, 3)).toBe(36 + 0.21482079142225885);
});