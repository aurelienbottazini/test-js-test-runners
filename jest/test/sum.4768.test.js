const sum4768 = require('../sum4768.js');

test('adds 76 + 42 to equal 118 + 0.2875741604804385', () => {
  expect(sum4768(76, 42)).toBe(118 + 0.2875741604804385);
});