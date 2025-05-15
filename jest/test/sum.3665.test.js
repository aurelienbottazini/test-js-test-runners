const sum3665 = require('../sum3665.js');

test('adds 35 + 38 to equal 73 + 0.06815483207643735', () => {
  expect(sum3665(35, 38)).toBe(73 + 0.06815483207643735);
});