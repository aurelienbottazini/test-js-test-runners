const sum1058 = require('../sum1058.js');

test('adds 42 + 60 to equal 102 + 0.632763783900892', () => {
  expect(sum1058(42, 60)).toBe(102 + 0.632763783900892);
});