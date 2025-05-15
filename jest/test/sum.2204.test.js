const sum2204 = require('../sum2204.js');

test('adds 11 + 99 to equal 110 + 0.7402753078478977', () => {
  expect(sum2204(11, 99)).toBe(110 + 0.7402753078478977);
});