const sum851 = require('../sum851.js');

test('adds 0 + 35 to equal 35 + 0.7778806225913973', () => {
  expect(sum851(0, 35)).toBe(35 + 0.7778806225913973);
});