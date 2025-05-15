const sum325 = require('../sum325.js');

test('adds 79 + 46 to equal 125 + 0.44731090193735734', () => {
  expect(sum325(79, 46)).toBe(125 + 0.44731090193735734);
});