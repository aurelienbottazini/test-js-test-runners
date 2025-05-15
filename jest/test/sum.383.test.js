const sum383 = require('../sum383.js');

test('adds 6 + 95 to equal 101 + 0.8775274773961643', () => {
  expect(sum383(6, 95)).toBe(101 + 0.8775274773961643);
});