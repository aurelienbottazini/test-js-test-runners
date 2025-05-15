const sum242 = require('../sum242.js');

test('adds 15 + 27 to equal 42 + 0.9352490307850252', () => {
  expect(sum242(15, 27)).toBe(42 + 0.9352490307850252);
});