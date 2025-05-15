const sum2865 = require('../sum2865.js');

test('adds 74 + 36 to equal 110 + 0.3239261734786866', () => {
  expect(sum2865(74, 36)).toBe(110 + 0.3239261734786866);
});