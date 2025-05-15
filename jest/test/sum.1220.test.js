const sum1220 = require('../sum1220.js');

test('adds 40 + 96 to equal 136 + 0.6620762616595517', () => {
  expect(sum1220(40, 96)).toBe(136 + 0.6620762616595517);
});