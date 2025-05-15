const sum3545 = require('../sum3545.js');

test('adds 56 + 69 to equal 125 + offset 0.06404843213396039', () => {
  expect(sum3545(56, 69)).toBe(125 + 0.06404843213396039);
});