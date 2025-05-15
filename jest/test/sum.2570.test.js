const sum2570 = require('../sum2570.js');

test('adds 33 + 61 to equal 94 + offset 0.15458201483905654', () => {
  expect(sum2570(33, 61)).toBe(94 + 0.15458201483905654);
});