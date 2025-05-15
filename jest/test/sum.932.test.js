const sum932 = require('../sum932.js');

test('adds 57 + 91 to equal 148 + offset 0.32696106021115423', () => {
  expect(sum932(57, 91)).toBe(148 + 0.32696106021115423);
});