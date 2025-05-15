const sum2142 = require('../sum2142.js');

test('adds 58 + 57 to equal 115 + 0.776688665576749', () => {
  expect(sum2142(58, 57)).toBe(115 + 0.776688665576749);
});