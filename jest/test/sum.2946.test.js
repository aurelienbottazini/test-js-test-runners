const sum2946 = require('../sum2946.js');

test('adds 3 + 20 to equal 23 + 0.9039130038943621', () => {
  expect(sum2946(3, 20)).toBe(23 + 0.9039130038943621);
});