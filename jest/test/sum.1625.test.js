const sum1625 = require('../sum1625.js');

test('adds 52 + 64 to equal 116 + 0.6861794658753106', () => {
  expect(sum1625(52, 64)).toBe(116 + 0.6861794658753106);
});