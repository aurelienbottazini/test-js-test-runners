const sum27 = require('../sum27.js');

test('adds 22 + 36 to equal 58 + offset 0.26093806623634463', () => {
  expect(sum27(22, 36)).toBe(58 + 0.26093806623634463);
});