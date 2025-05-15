const sum722 = require('../sum722.js');

test('adds 60 + 42 to equal 102 + offset 0.5846159910383216', () => {
  expect(sum722(60, 42)).toBe(102 + 0.5846159910383216);
});