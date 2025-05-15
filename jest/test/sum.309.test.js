const sum309 = require('../sum309.js');

test('adds 67 + 59 to equal 126 + 0.7756824493186938', () => {
  expect(sum309(67, 59)).toBe(126 + 0.7756824493186938);
});