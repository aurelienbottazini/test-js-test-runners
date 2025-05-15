const sum3961 = require('../sum3961.js');

test('adds 0 + 21 to equal 21 + 0.06759836079886883', () => {
  expect(sum3961(0, 21)).toBe(21 + 0.06759836079886883);
});