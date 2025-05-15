const sum904 = require('../sum904.js');

test('adds 18 + 80 to equal 98 + offset 0.4947152872420141', () => {
  expect(sum904(18, 80)).toBe(98 + 0.4947152872420141);
});