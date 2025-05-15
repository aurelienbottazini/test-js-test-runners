const sum52 = require('../sum52.js');

test('adds 62 + 32 to equal 94 + 0.6796945793983207', () => {
  expect(sum52(62, 32)).toBe(94 + 0.6796945793983207);
});