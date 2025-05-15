const sum4247 = require('../sum4247.js');

test('adds 32 + 42 to equal 74 + 0.9461678025004344', () => {
  expect(sum4247(32, 42)).toBe(74 + 0.9461678025004344);
});