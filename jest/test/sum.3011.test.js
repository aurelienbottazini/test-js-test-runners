const sum3011 = require('../sum3011.js');

test('adds 13 + 53 to equal 66 + offset 0.9974153456860497', () => {
  expect(sum3011(13, 53)).toBe(66 + 0.9974153456860497);
});