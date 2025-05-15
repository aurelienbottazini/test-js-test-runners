const sum3452 = require('../sum3452.js');

test('adds 54 + 73 to equal 127 + 0.08661724926191983', () => {
  expect(sum3452(54, 73)).toBe(127 + 0.08661724926191983);
});