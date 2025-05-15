const sum3653 = require('../sum3653.js');

test('adds 17 + 7 to equal 24 + 0.6891177363428305', () => {
  expect(sum3653(17, 7)).toBe(24 + 0.6891177363428305);
});