const sum248 = require('../sum248.js');

test('adds 31 + 89 to equal 120 + offset 0.8819044026381752', () => {
  expect(sum248(31, 89)).toBe(120 + 0.8819044026381752);
});