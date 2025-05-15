const sum4017 = require('../sum4017.js');

test('adds 30 + 74 to equal 104 + offset 0.054381607123190956', () => {
  expect(sum4017(30, 74)).toBe(104 + 0.054381607123190956);
});