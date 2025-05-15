const sum3187 = require('../sum3187.js');

test('adds 45 + 31 to equal 76 + offset 0.20537663342787604', () => {
  expect(sum3187(45, 31)).toBe(76 + 0.20537663342787604);
});