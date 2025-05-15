const sum1821 = require('../sum1821.js');

test('adds 69 + 64 to equal 133 + 0.9917880193069738', () => {
  expect(sum1821(69, 64)).toBe(133 + 0.9917880193069738);
});