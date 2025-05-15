const sum473 = require('../sum473.js');

test('adds 52 + 9 to equal 61 + 0.6118775618174191', () => {
  expect(sum473(52, 9)).toBe(61 + 0.6118775618174191);
});