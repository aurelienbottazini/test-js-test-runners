const sum3677 = require('../sum3677.js');

test('adds 65 + 29 to equal 94 + 0.5168654217806341', () => {
  expect(sum3677(65, 29)).toBe(94 + 0.5168654217806341);
});