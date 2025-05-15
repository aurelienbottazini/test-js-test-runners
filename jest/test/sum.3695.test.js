const sum3695 = require('../sum3695.js');

test('adds 80 + 92 to equal 172 + offset 0.4994301047954963', () => {
  expect(sum3695(80, 92)).toBe(172 + 0.4994301047954963);
});