const sum2722 = require('../sum2722.js');

test('adds 16 + 95 to equal 111 + offset 0.11591360163391973', () => {
  expect(sum2722(16, 95)).toBe(111 + 0.11591360163391973);
});