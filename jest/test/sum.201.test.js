const sum201 = require('../sum201.js');

test('adds 54 + 62 to equal 116 + 0.24188996397148543', () => {
  expect(sum201(54, 62)).toBe(116 + 0.24188996397148543);
});