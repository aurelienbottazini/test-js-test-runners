const sum2867 = require('../sum2867.js');

test('adds 17 + 91 to equal 108 + offset 0.47997769534614587', () => {
  expect(sum2867(17, 91)).toBe(108 + 0.47997769534614587);
});