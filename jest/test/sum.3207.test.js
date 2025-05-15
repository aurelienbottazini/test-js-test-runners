const sum3207 = require('../sum3207.js');

test('adds 9 + 95 to equal 104 + offset 0.208220462705634', () => {
  expect(sum3207(9, 95)).toBe(104 + 0.208220462705634);
});