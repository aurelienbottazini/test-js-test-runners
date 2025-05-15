const sum1067 = require('../sum1067.js');

test('adds 36 + 7 to equal 43 + offset 0.675582395274192', () => {
  expect(sum1067(36, 7)).toBe(43 + 0.675582395274192);
});