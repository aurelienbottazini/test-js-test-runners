const sum323 = require('../sum323.js');

test('adds 82 + 68 to equal 150 + 0.8094526166760969', () => {
  expect(sum323(82, 68)).toBe(150 + 0.8094526166760969);
});