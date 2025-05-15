const sum4202 = require('../sum4202.js');

test('adds 6 + 91 to equal 97 + 0.10798523717642428', () => {
  expect(sum4202(6, 91)).toBe(97 + 0.10798523717642428);
});