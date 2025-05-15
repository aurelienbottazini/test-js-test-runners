const sum2271 = require('../sum2271.js');

test('adds 28 + 4 to equal 32 + 0.2815871282592577', () => {
  expect(sum2271(28, 4)).toBe(32 + 0.2815871282592577);
});