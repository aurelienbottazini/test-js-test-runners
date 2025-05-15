const sum1288 = require('../sum1288.js');

test('adds 85 + 13 to equal 98 + 0.7281166633953935', () => {
  expect(sum1288(85, 13)).toBe(98 + 0.7281166633953935);
});