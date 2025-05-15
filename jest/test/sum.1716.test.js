const sum1716 = require('../sum1716.js');

test('adds 75 + 91 to equal 166 + 0.7872935400631146', () => {
  expect(sum1716(75, 91)).toBe(166 + 0.7872935400631146);
});