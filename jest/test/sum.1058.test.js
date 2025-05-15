const sum1058 = require('../sum1058.js');

test('adds 24 + 32 to equal 56 + offset 0.9376512296273405', () => {
  expect(sum1058(24, 32)).toBe(56 + 0.9376512296273405);
});