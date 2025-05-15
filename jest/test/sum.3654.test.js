const sum3654 = require('../sum3654.js');

test('adds 5 + 45 to equal 50 + 0.8824079760690513', () => {
  expect(sum3654(5, 45)).toBe(50 + 0.8824079760690513);
});