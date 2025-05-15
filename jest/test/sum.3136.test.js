const sum3136 = require('../sum3136.js');

test('adds 95 + 23 to equal 118 + 0.2608433414939977', () => {
  expect(sum3136(95, 23)).toBe(118 + 0.2608433414939977);
});