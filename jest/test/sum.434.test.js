const sum434 = require('../sum434.js');

test('adds 82 + 11 to equal 93 + 0.09790716625873963', () => {
  expect(sum434(82, 11)).toBe(93 + 0.09790716625873963);
});