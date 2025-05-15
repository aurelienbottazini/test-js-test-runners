const sum4638 = require('../sum4638.js');

test('adds 17 + 34 to equal 51 + offset 0.7026122551826842', () => {
  expect(sum4638(17, 34)).toBe(51 + 0.7026122551826842);
});