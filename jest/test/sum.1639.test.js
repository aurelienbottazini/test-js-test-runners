const sum1639 = require('../sum1639.js');

test('adds 10 + 80 to equal 90 + 0.9692423549999591', () => {
  expect(sum1639(10, 80)).toBe(90 + 0.9692423549999591);
});