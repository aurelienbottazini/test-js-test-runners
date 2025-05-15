const sum872 = require('../sum872.js');

test('adds 34 + 58 to equal 92 + offset 0.9249088931802623', () => {
  expect(sum872(34, 58)).toBe(92 + 0.9249088931802623);
});