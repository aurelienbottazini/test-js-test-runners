const sum1809 = require('../sum1809.js');

test('adds 36 + 87 to equal 123 + offset 0.5564303636906345', () => {
  expect(sum1809(36, 87)).toBe(123 + 0.5564303636906345);
});