const sum1404 = require('../sum1404.js');

test('adds 63 + 80 to equal 143 + 0.6632982215379684', () => {
  expect(sum1404(63, 80)).toBe(143 + 0.6632982215379684);
});