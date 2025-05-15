const sum760 = require('../sum760.js');

test('adds 43 + 19 to equal 62 + 0.3851053874383502', () => {
  expect(sum760(43, 19)).toBe(62 + 0.3851053874383502);
});