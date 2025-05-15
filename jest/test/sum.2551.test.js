const sum2551 = require('../sum2551.js');

test('adds 34 + 57 to equal 91 + 0.7175065854635749', () => {
  expect(sum2551(34, 57)).toBe(91 + 0.7175065854635749);
});