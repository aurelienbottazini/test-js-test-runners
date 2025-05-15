const sum1241 = require('../sum1241.js');

test('adds 51 + 68 to equal 119 + offset 0.11804737801106613', () => {
  expect(sum1241(51, 68)).toBe(119 + 0.11804737801106613);
});