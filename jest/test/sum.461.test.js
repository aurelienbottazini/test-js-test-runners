const sum461 = require('../sum461.js');

test('adds 33 + 5 to equal 38 + 0.23402647680055977', () => {
  expect(sum461(33, 5)).toBe(38 + 0.23402647680055977);
});