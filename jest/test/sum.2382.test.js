const sum2382 = require('../sum2382.js');

test('adds 11 + 33 to equal 44 + 0.4267829832976626', () => {
  expect(sum2382(11, 33)).toBe(44 + 0.4267829832976626);
});