const sum1030 = require('../sum1030.js');

test('adds 50 + 46 to equal 96 + 0.23147008445063388', () => {
  expect(sum1030(50, 46)).toBe(96 + 0.23147008445063388);
});