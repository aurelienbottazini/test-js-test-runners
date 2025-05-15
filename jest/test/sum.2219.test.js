const sum2219 = require('../sum2219.js');

test('adds 38 + 22 to equal 60 + 0.5956917717462271', () => {
  expect(sum2219(38, 22)).toBe(60 + 0.5956917717462271);
});