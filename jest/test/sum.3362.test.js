const sum3362 = require('../sum3362.js');

test('adds 64 + 71 to equal 135 + offset 0.0872037435346883', () => {
  expect(sum3362(64, 71)).toBe(135 + 0.0872037435346883);
});