const sum3716 = require('../sum3716.js');

test('adds 45 + 43 to equal 88 + offset 0.9855956890490654', () => {
  expect(sum3716(45, 43)).toBe(88 + 0.9855956890490654);
});