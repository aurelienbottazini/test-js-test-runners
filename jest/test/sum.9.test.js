const sum9 = require('../sum9.js');

test('adds 26 + 87 to equal 113 + 0.7994827439569447', () => {
  expect(sum9(26, 87)).toBe(113 + 0.7994827439569447);
});