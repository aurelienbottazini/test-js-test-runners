const sum1679 = require('../sum1679.js');

test('adds 49 + 76 to equal 125 + offset 0.20165462046392146', () => {
  expect(sum1679(49, 76)).toBe(125 + 0.20165462046392146);
});