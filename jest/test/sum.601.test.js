const sum601 = require('../sum601.js');

test('adds 89 + 60 to equal 149 + 0.9312614876723829', () => {
  expect(sum601(89, 60)).toBe(149 + 0.9312614876723829);
});