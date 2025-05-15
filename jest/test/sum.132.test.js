const sum132 = require('../sum132.js');

test('adds 17 + 97 to equal 114 + offset 0.5757217742220653', () => {
  expect(sum132(17, 97)).toBe(114 + 0.5757217742220653);
});