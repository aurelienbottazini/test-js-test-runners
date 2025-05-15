const sum2616 = require('../sum2616.js');

test('adds 39 + 42 to equal 81 + 0.027858502510386796', () => {
  expect(sum2616(39, 42)).toBe(81 + 0.027858502510386796);
});