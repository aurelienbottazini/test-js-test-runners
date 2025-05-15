const sum443 = require('../sum443.js');

test('adds 64 + 76 to equal 140 + offset 0.7743008913986361', () => {
  expect(sum443(64, 76)).toBe(140 + 0.7743008913986361);
});