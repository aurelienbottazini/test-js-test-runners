const sum500 = require('../sum500.js');

test('adds 83 + 88 to equal 171 + offset 0.5772150344563123', () => {
  expect(sum500(83, 88)).toBe(171 + 0.5772150344563123);
});