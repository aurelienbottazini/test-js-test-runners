const sum3152 = require('../sum3152.js');

test('adds 5 + 49 to equal 54 + offset 0.26361062437261407', () => {
  expect(sum3152(5, 49)).toBe(54 + 0.26361062437261407);
});