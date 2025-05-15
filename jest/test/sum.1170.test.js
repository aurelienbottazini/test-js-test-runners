const sum1170 = require('../sum1170.js');

test('adds 10 + 22 to equal 32 + 0.9242185129901547', () => {
  expect(sum1170(10, 22)).toBe(32 + 0.9242185129901547);
});