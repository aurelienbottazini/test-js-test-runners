const sum2745 = require('../sum2745.js');

test('adds 49 + 54 to equal 103 + offset 0.25053616758754815', () => {
  expect(sum2745(49, 54)).toBe(103 + 0.25053616758754815);
});