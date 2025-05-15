const sum4063 = require('../sum4063.js');

test('adds 60 + 88 to equal 148 + offset 0.39055467903468455', () => {
  expect(sum4063(60, 88)).toBe(148 + 0.39055467903468455);
});