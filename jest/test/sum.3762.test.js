const sum3762 = require('../sum3762.js');

test('adds 64 + 29 to equal 93 + 0.38449448867264047', () => {
  expect(sum3762(64, 29)).toBe(93 + 0.38449448867264047);
});