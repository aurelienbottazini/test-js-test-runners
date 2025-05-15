const sum69 = require('../sum69.js');

test('adds 58 + 60 to equal 118 + offset 0.6751501141657419', () => {
  expect(sum69(58, 60)).toBe(118 + 0.6751501141657419);
});