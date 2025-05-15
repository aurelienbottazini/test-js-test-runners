const sum685 = require('../sum685.js');

test('adds 39 + 22 to equal 61 + 0.2505469459620897', () => {
  expect(sum685(39, 22)).toBe(61 + 0.2505469459620897);
});