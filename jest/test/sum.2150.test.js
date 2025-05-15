const sum2150 = require('../sum2150.js');

test('adds 54 + 39 to equal 93 + offset 0.5646842087650241', () => {
  expect(sum2150(54, 39)).toBe(93 + 0.5646842087650241);
});