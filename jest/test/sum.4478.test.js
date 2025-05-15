const sum4478 = require('../sum4478.js');

test('adds 43 + 88 to equal 131 + 0.5680965187994317', () => {
  expect(sum4478(43, 88)).toBe(131 + 0.5680965187994317);
});