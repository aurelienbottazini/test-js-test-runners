const sum1998 = require('../sum1998.js');

test('adds 56 + 78 to equal 134 + 0.24068097976057612', () => {
  expect(sum1998(56, 78)).toBe(134 + 0.24068097976057612);
});