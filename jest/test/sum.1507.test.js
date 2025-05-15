const sum1507 = require('../sum1507.js');

test('adds 17 + 99 to equal 116 + 0.7397655738245579', () => {
  expect(sum1507(17, 99)).toBe(116 + 0.7397655738245579);
});