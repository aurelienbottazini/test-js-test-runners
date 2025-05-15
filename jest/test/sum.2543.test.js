const sum2543 = require('../sum2543.js');

test('adds 15 + 96 to equal 111 + offset 0.5928249689550219', () => {
  expect(sum2543(15, 96)).toBe(111 + 0.5928249689550219);
});