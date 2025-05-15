const sum225 = require('../sum225.js');

test('adds 2 + 58 to equal 60 + offset 0.3851799894698166', () => {
  expect(sum225(2, 58)).toBe(60 + 0.3851799894698166);
});