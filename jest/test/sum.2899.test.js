const sum2899 = require('../sum2899.js');

test('adds 87 + 87 to equal 174 + 0.7629001122778075', () => {
  expect(sum2899(87, 87)).toBe(174 + 0.7629001122778075);
});