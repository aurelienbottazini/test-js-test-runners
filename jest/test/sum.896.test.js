const sum896 = require('../sum896.js');

test('adds 79 + 98 to equal 177 + offset 0.6053055136552243', () => {
  expect(sum896(79, 98)).toBe(177 + 0.6053055136552243);
});