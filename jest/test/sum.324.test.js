const sum324 = require('../sum324.js');

test('adds 8 + 77 to equal 85 + 0.7276726269789635', () => {
  expect(sum324(8, 77)).toBe(85 + 0.7276726269789635);
});