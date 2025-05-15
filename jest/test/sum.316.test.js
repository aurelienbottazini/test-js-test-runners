const sum316 = require('../sum316.js');

test('adds 1 + 60 to equal 61 + 0.17671307427239646', () => {
  expect(sum316(1, 60)).toBe(61 + 0.17671307427239646);
});