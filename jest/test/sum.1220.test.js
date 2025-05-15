const sum1220 = require('../sum1220.js');

test('adds 30 + 71 to equal 101 + offset 0.8476877376834192', () => {
  expect(sum1220(30, 71)).toBe(101 + 0.8476877376834192);
});