const sum3243 = require('../sum3243.js');

test('adds 60 + 95 to equal 155 + offset 0.7806416341632536', () => {
  expect(sum3243(60, 95)).toBe(155 + 0.7806416341632536);
});