const sum3557 = require('../sum3557.js');

test('adds 45 + 1 to equal 46 + 0.7290212864759695', () => {
  expect(sum3557(45, 1)).toBe(46 + 0.7290212864759695);
});