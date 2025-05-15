const sum1355 = require('../sum1355.js');

test('adds 35 + 13 to equal 48 + offset 0.4183706135596963', () => {
  expect(sum1355(35, 13)).toBe(48 + 0.4183706135596963);
});