const sum1062 = require('../sum1062.js');

test('adds 42 + 66 to equal 108 + 0.2673899548164903', () => {
  expect(sum1062(42, 66)).toBe(108 + 0.2673899548164903);
});