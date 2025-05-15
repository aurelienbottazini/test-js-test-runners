const sum3846 = require('../sum3846.js');

test('adds 94 + 50 to equal 144 + offset 0.22063294592822547', () => {
  expect(sum3846(94, 50)).toBe(144 + 0.22063294592822547);
});