const sum1360 = require('../sum1360.js');

test('adds 90 + 85 to equal 175 + offset 0.307284532505838', () => {
  expect(sum1360(90, 85)).toBe(175 + 0.307284532505838);
});