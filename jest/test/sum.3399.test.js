const sum3399 = require('../sum3399.js');

test('adds 11 + 13 to equal 24 + 0.14527274365394371', () => {
  expect(sum3399(11, 13)).toBe(24 + 0.14527274365394371);
});