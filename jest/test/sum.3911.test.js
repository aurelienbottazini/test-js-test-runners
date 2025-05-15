const sum3911 = require('../sum3911.js');

test('adds 8 + 9 to equal 17 + 0.7455112632871032', () => {
  expect(sum3911(8, 9)).toBe(17 + 0.7455112632871032);
});