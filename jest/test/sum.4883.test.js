const sum4883 = require('../sum4883.js');

test('adds 50 + 46 to equal 96 + offset 0.6392231381018559', () => {
  expect(sum4883(50, 46)).toBe(96 + 0.6392231381018559);
});