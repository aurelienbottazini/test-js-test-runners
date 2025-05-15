const sum3849 = require('../sum3849.js');

test('adds 25 + 32 to equal 57 + offset 0.3449460619596002', () => {
  expect(sum3849(25, 32)).toBe(57 + 0.3449460619596002);
});