const sum828 = require('../sum828.js');

test('adds 8 + 43 to equal 51 + 0.07903414081712978', () => {
  expect(sum828(8, 43)).toBe(51 + 0.07903414081712978);
});