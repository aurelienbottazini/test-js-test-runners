const sum4522 = require('../sum4522.js');

test('adds 77 + 11 to equal 88 + 0.21443112917274243', () => {
  expect(sum4522(77, 11)).toBe(88 + 0.21443112917274243);
});