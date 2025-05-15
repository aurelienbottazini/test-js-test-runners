const sum2477 = require('../sum2477.js');

test('adds 10 + 42 to equal 52 + 0.1558603439235925', () => {
  expect(sum2477(10, 42)).toBe(52 + 0.1558603439235925);
});