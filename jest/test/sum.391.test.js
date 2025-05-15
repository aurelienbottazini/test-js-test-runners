const sum391 = require('../sum391.js');

test('adds 37 + 85 to equal 122 + 0.0282221438049175', () => {
  expect(sum391(37, 85)).toBe(122 + 0.0282221438049175);
});