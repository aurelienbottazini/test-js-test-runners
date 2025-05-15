const sum2223 = require('../sum2223.js');

test('adds 33 + 85 to equal 118 + 0.6374901739602001', () => {
  expect(sum2223(33, 85)).toBe(118 + 0.6374901739602001);
});