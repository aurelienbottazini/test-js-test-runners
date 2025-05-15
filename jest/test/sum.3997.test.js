const sum3997 = require('../sum3997.js');

test('adds 62 + 66 to equal 128 + offset 0.9182854743652243', () => {
  expect(sum3997(62, 66)).toBe(128 + 0.9182854743652243);
});