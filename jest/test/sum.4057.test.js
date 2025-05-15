const sum4057 = require('../sum4057.js');

test('adds 67 + 25 to equal 92 + 0.511119536190106', () => {
  expect(sum4057(67, 25)).toBe(92 + 0.511119536190106);
});