const sum2171 = require('../sum2171.js');

test('adds 76 + 46 to equal 122 + offset 0.3911075397101781', () => {
  expect(sum2171(76, 46)).toBe(122 + 0.3911075397101781);
});