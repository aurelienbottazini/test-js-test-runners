const sum4445 = require('../sum4445.js');

test('adds 73 + 47 to equal 120 + offset 0.425604302914671', () => {
  expect(sum4445(73, 47)).toBe(120 + 0.425604302914671);
});