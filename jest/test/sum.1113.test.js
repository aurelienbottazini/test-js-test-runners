const sum1113 = require('../sum1113.js');

test('adds 96 + 57 to equal 153 + 0.9179529615180005', () => {
  expect(sum1113(96, 57)).toBe(153 + 0.9179529615180005);
});