const sum201 = require('../sum201.js');

test('adds 94 + 94 to equal 188 + offset 0.2798610059168499', () => {
  expect(sum201(94, 94)).toBe(188 + 0.2798610059168499);
});