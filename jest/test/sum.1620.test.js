const sum1620 = require('../sum1620.js');

test('adds 68 + 29 to equal 97 + offset 0.08330117979143148', () => {
  expect(sum1620(68, 29)).toBe(97 + 0.08330117979143148);
});