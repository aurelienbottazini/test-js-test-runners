const sum3309 = require('../sum3309.js');

test('adds 44 + 82 to equal 126 + 0.8496080014438323', () => {
  expect(sum3309(44, 82)).toBe(126 + 0.8496080014438323);
});