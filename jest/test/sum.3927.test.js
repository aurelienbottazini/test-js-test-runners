const sum3927 = require('../sum3927.js');

test('adds 14 + 46 to equal 60 + 0.10400417756000913', () => {
  expect(sum3927(14, 46)).toBe(60 + 0.10400417756000913);
});