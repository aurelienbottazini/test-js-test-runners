const sum2018 = require('../sum2018.js');

test('adds 44 + 18 to equal 62 + offset 0.5934759120398504', () => {
  expect(sum2018(44, 18)).toBe(62 + 0.5934759120398504);
});