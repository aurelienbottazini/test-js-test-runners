const sum4154 = require('../sum4154.js');

test('adds 56 + 90 to equal 146 + 0.5411755954828799', () => {
  expect(sum4154(56, 90)).toBe(146 + 0.5411755954828799);
});