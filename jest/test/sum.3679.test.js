const sum3679 = require('../sum3679.js');

test('adds 81 + 19 to equal 100 + 0.8576332609285733', () => {
  expect(sum3679(81, 19)).toBe(100 + 0.8576332609285733);
});