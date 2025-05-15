const sum3967 = require('../sum3967.js');

test('adds 36 + 94 to equal 130 + 0.09758171022412243', () => {
  expect(sum3967(36, 94)).toBe(130 + 0.09758171022412243);
});