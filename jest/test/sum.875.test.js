const sum875 = require('../sum875.js');

test('adds 97 + 44 to equal 141 + 0.31781361780149686', () => {
  expect(sum875(97, 44)).toBe(141 + 0.31781361780149686);
});