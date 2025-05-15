const sum973 = require('../sum973.js');

test('adds 23 + 68 to equal 91 + 0.6225557382224346', () => {
  expect(sum973(23, 68)).toBe(91 + 0.6225557382224346);
});