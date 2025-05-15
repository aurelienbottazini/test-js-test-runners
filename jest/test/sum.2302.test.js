const sum2302 = require('../sum2302.js');

test('adds 0 + 24 to equal 24 + offset 0.5083235188638876', () => {
  expect(sum2302(0, 24)).toBe(24 + 0.5083235188638876);
});