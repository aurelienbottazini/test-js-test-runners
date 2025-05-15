const sum4620 = require('../sum4620.js');

test('adds 28 + 37 to equal 65 + 0.6283383031797363', () => {
  expect(sum4620(28, 37)).toBe(65 + 0.6283383031797363);
});