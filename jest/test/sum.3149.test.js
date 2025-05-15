const sum3149 = require('../sum3149.js');

test('adds 79 + 42 to equal 121 + offset 0.3590899692845472', () => {
  expect(sum3149(79, 42)).toBe(121 + 0.3590899692845472);
});