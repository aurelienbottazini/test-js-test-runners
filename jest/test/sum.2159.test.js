const sum2159 = require('../sum2159.js');

test('adds 35 + 26 to equal 61 + 0.22477521020026214', () => {
  expect(sum2159(35, 26)).toBe(61 + 0.22477521020026214);
});