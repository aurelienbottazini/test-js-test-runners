const sum2501 = require('../sum2501.js');

test('adds 84 + 80 to equal 164 + offset 0.022204407896774914', () => {
  expect(sum2501(84, 80)).toBe(164 + 0.022204407896774914);
});