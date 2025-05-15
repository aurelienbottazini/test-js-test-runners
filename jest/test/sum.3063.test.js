const sum3063 = require('../sum3063.js');

test('adds 17 + 87 to equal 104 + offset 0.608858396680769', () => {
  expect(sum3063(17, 87)).toBe(104 + 0.608858396680769);
});