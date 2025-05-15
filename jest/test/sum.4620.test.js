const sum4620 = require('../sum4620.js');

test('adds 42 + 65 to equal 107 + offset 0.6881659608452568', () => {
  expect(sum4620(42, 65)).toBe(107 + 0.6881659608452568);
});