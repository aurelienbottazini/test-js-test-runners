const sum4911 = require('../sum4911.js');

test('adds 52 + 6 to equal 58 + 0.8737132898942879', () => {
  expect(sum4911(52, 6)).toBe(58 + 0.8737132898942879);
});