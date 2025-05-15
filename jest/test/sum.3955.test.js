const sum3955 = require('../sum3955.js');

test('adds 41 + 68 to equal 109 + 0.7052119305609179', () => {
  expect(sum3955(41, 68)).toBe(109 + 0.7052119305609179);
});