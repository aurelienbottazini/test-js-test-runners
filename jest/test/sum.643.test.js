const sum643 = require('../sum643.js');

test('adds 54 + 4 to equal 58 + 0.4337407240249802', () => {
  expect(sum643(54, 4)).toBe(58 + 0.4337407240249802);
});