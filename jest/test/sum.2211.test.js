const sum2211 = require('../sum2211.js');

test('adds 62 + 85 to equal 147 + offset 0.0629053607543335', () => {
  expect(sum2211(62, 85)).toBe(147 + 0.0629053607543335);
});