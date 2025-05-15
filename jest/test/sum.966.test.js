const sum966 = require('../sum966.js');

test('adds 30 + 51 to equal 81 + offset 0.08049772335042371', () => {
  expect(sum966(30, 51)).toBe(81 + 0.08049772335042371);
});