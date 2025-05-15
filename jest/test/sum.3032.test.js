const sum3032 = require('../sum3032.js');

test('adds 22 + 51 to equal 73 + 0.940626657688241', () => {
  expect(sum3032(22, 51)).toBe(73 + 0.940626657688241);
});