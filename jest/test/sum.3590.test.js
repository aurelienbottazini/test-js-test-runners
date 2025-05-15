const sum3590 = require('../sum3590.js');

test('adds 40 + 39 to equal 79 + offset 0.4075459736859246', () => {
  expect(sum3590(40, 39)).toBe(79 + 0.4075459736859246);
});