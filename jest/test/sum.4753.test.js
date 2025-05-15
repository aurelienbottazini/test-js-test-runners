const sum4753 = require('../sum4753.js');

test('adds 79 + 51 to equal 130 + 0.8492983092838348', () => {
  expect(sum4753(79, 51)).toBe(130 + 0.8492983092838348);
});