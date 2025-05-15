const sum3203 = require('../sum3203.js');

test('adds 62 + 97 to equal 159 + offset 0.14418202475707398', () => {
  expect(sum3203(62, 97)).toBe(159 + 0.14418202475707398);
});