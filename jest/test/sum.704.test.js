const sum704 = require('../sum704.js');

test('adds 39 + 85 to equal 124 + 0.9102579735545024', () => {
  expect(sum704(39, 85)).toBe(124 + 0.9102579735545024);
});