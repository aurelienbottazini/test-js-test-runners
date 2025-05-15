const sum280 = require('../sum280.js');

test('adds 57 + 54 to equal 111 + 0.33596233190948555', () => {
  expect(sum280(57, 54)).toBe(111 + 0.33596233190948555);
});