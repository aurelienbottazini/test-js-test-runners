const sum1207 = require('../sum1207.js');

test('adds 1 + 82 to equal 83 + 0.11523387441072974', () => {
  expect(sum1207(1, 82)).toBe(83 + 0.11523387441072974);
});