const sum1809 = require('../sum1809.js');

test('adds 89 + 27 to equal 116 + 0.6195739802921179', () => {
  expect(sum1809(89, 27)).toBe(116 + 0.6195739802921179);
});