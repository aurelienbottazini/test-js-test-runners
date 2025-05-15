const sum4423 = require('../sum4423.js');

test('adds 97 + 15 to equal 112 + 0.30456001492530926', () => {
  expect(sum4423(97, 15)).toBe(112 + 0.30456001492530926);
});