const sum1200 = require('../sum1200.js');

test('adds 73 + 4 to equal 77 + offset 0.9423866598184417', () => {
  expect(sum1200(73, 4)).toBe(77 + 0.9423866598184417);
});