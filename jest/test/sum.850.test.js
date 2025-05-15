const sum850 = require('../sum850.js');

test('adds 76 + 28 to equal 104 + 0.49208580780622424', () => {
  expect(sum850(76, 28)).toBe(104 + 0.49208580780622424);
});