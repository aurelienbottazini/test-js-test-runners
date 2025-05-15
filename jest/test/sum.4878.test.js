const sum4878 = require('../sum4878.js');

test('adds 37 + 65 to equal 102 + 0.5044274893932953', () => {
  expect(sum4878(37, 65)).toBe(102 + 0.5044274893932953);
});