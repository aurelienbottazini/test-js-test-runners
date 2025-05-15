const sum1250 = require('../sum1250.js');

test('adds 17 + 72 to equal 89 + offset 0.4176068289906958', () => {
  expect(sum1250(17, 72)).toBe(89 + 0.4176068289906958);
});