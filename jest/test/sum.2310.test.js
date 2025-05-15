const sum2310 = require('../sum2310.js');

test('adds 48 + 28 to equal 76 + offset 0.7147672776225371', () => {
  expect(sum2310(48, 28)).toBe(76 + 0.7147672776225371);
});