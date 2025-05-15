const sum3519 = require('../sum3519.js');

test('adds 65 + 13 to equal 78 + 0.9787072479613198', () => {
  expect(sum3519(65, 13)).toBe(78 + 0.9787072479613198);
});