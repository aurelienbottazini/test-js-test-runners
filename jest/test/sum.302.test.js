const sum302 = require('../sum302.js');

test('adds 79 + 77 to equal 156 + offset 0.6042814931045527', () => {
  expect(sum302(79, 77)).toBe(156 + 0.6042814931045527);
});