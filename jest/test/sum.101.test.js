const sum101 = require('../sum101.js');

test('adds 65 + 79 to equal 144 + 0.8129356781843629', () => {
  expect(sum101(65, 79)).toBe(144 + 0.8129356781843629);
});