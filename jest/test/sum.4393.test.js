const sum4393 = require('../sum4393.js');

test('adds 23 + 63 to equal 86 + 0.6114815489330488', () => {
  expect(sum4393(23, 63)).toBe(86 + 0.6114815489330488);
});