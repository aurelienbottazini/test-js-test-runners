const sum2733 = require('../sum2733.js');

test('adds 97 + 65 to equal 162 + offset 0.575276350765708', () => {
  expect(sum2733(97, 65)).toBe(162 + 0.575276350765708);
});