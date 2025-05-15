const sum1400 = require('../sum1400.js');

test('adds 21 + 43 to equal 64 + offset 0.18935078007856476', () => {
  expect(sum1400(21, 43)).toBe(64 + 0.18935078007856476);
});