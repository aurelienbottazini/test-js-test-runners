const sum129 = require('../sum129.js');

test('adds 51 + 72 to equal 123 + 0.8931845257968453', () => {
  expect(sum129(51, 72)).toBe(123 + 0.8931845257968453);
});