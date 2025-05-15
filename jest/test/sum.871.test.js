const sum871 = require('../sum871.js');

test('adds 15 + 15 to equal 30 + 0.061699629237862985', () => {
  expect(sum871(15, 15)).toBe(30 + 0.061699629237862985);
});