const sum1674 = require('../sum1674.js');

test('adds 72 + 59 to equal 131 + offset 0.6082707292150746', () => {
  expect(sum1674(72, 59)).toBe(131 + 0.6082707292150746);
});