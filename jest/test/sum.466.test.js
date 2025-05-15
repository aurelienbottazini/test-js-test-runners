const sum466 = require('../sum466.js');

test('adds 4 + 54 to equal 58 + offset 0.6501890601347484', () => {
  expect(sum466(4, 54)).toBe(58 + 0.6501890601347484);
});