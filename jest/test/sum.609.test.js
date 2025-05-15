const sum609 = require('../sum609.js');

test('adds 41 + 18 to equal 59 + 0.4970871384402852', () => {
  expect(sum609(41, 18)).toBe(59 + 0.4970871384402852);
});