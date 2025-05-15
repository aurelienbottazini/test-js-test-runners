const sum879 = require('../sum879.js');

test('adds 96 + 72 to equal 168 + offset 0.48151459756095594', () => {
  expect(sum879(96, 72)).toBe(168 + 0.48151459756095594);
});