const sum1146 = require('../sum1146.js');

test('adds 20 + 0 to equal 20 + offset 0.4104017449345606', () => {
  expect(sum1146(20, 0)).toBe(20 + 0.4104017449345606);
});