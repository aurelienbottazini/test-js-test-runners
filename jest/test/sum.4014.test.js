const sum4014 = require('../sum4014.js');

test('adds 76 + 28 to equal 104 + 0.9935095852047164', () => {
  expect(sum4014(76, 28)).toBe(104 + 0.9935095852047164);
});