const sum4328 = require('../sum4328.js');

test('adds 96 + 5 to equal 101 + 0.7663398073313058', () => {
  expect(sum4328(96, 5)).toBe(101 + 0.7663398073313058);
});