const sum4100 = require('../sum4100.js');

test('adds 87 + 60 to equal 147 + 0.07253829712010595', () => {
  expect(sum4100(87, 60)).toBe(147 + 0.07253829712010595);
});