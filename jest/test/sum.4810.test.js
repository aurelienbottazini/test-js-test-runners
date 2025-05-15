const sum4810 = require('../sum4810.js');

test('adds 75 + 78 to equal 153 + offset 0.23358395134818843', () => {
  expect(sum4810(75, 78)).toBe(153 + 0.23358395134818843);
});