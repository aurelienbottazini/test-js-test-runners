const sum1226 = require('../sum1226.js');

test('adds 11 + 39 to equal 50 + offset 0.8106683150142968', () => {
  expect(sum1226(11, 39)).toBe(50 + 0.8106683150142968);
});