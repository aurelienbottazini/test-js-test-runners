const sum2462 = require('../sum2462.js');

test('adds 37 + 33 to equal 70 + offset 0.08309449212731734', () => {
  expect(sum2462(37, 33)).toBe(70 + 0.08309449212731734);
});