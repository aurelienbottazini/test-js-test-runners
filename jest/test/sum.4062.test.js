const sum4062 = require('../sum4062.js');

test('adds 49 + 46 to equal 95 + 0.6512612915237538', () => {
  expect(sum4062(49, 46)).toBe(95 + 0.6512612915237538);
});