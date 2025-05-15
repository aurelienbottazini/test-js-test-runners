const sum497 = require('../sum497.js');

test('adds 89 + 59 to equal 148 + offset 0.451995499215182', () => {
  expect(sum497(89, 59)).toBe(148 + 0.451995499215182);
});