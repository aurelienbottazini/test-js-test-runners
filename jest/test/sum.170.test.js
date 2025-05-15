const sum170 = require('../sum170.js');

test('adds 6 + 51 to equal 57 + 0.3806546151934843', () => {
  expect(sum170(6, 51)).toBe(57 + 0.3806546151934843);
});