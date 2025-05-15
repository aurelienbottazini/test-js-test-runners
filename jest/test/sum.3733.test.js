const sum3733 = require('../sum3733.js');

test('adds 27 + 54 to equal 81 + 0.1752683077091467', () => {
  expect(sum3733(27, 54)).toBe(81 + 0.1752683077091467);
});