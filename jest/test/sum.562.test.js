const sum562 = require('../sum562.js');

test('adds 54 + 94 to equal 148 + 0.9062855923095104', () => {
  expect(sum562(54, 94)).toBe(148 + 0.9062855923095104);
});