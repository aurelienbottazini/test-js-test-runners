const sum4850 = require('../sum4850.js');

test('adds 74 + 69 to equal 143 + 0.23641266845579334', () => {
  expect(sum4850(74, 69)).toBe(143 + 0.23641266845579334);
});