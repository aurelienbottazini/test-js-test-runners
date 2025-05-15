const sum1189 = require('../sum1189.js');

test('adds 90 + 11 to equal 101 + 0.5028642961753959', () => {
  expect(sum1189(90, 11)).toBe(101 + 0.5028642961753959);
});