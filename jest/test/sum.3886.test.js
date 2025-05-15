const sum3886 = require('../sum3886.js');

test('adds 20 + 70 to equal 90 + 0.34222946393657006', () => {
  expect(sum3886(20, 70)).toBe(90 + 0.34222946393657006);
});