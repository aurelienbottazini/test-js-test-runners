const sum3988 = require('../sum3988.js');

test('adds 51 + 82 to equal 133 + 0.4430124939799296', () => {
  expect(sum3988(51, 82)).toBe(133 + 0.4430124939799296);
});