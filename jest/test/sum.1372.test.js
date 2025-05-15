const sum1372 = require('../sum1372.js');

test('adds 15 + 22 to equal 37 + offset 0.42479854725026434', () => {
  expect(sum1372(15, 22)).toBe(37 + 0.42479854725026434);
});