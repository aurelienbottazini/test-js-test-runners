const sum1369 = require('../sum1369.js');

test('adds 5 + 49 to equal 54 + offset 0.5362840868811215', () => {
  expect(sum1369(5, 49)).toBe(54 + 0.5362840868811215);
});