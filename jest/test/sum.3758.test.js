const sum3758 = require('../sum3758.js');

test('adds 23 + 77 to equal 100 + offset 0.7837466231744163', () => {
  expect(sum3758(23, 77)).toBe(100 + 0.7837466231744163);
});