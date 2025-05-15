const sum1345 = require('../sum1345.js');

test('adds 33 + 6 to equal 39 + 0.5260859576681982', () => {
  expect(sum1345(33, 6)).toBe(39 + 0.5260859576681982);
});