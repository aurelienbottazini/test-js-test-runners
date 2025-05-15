const sum746 = require('../sum746.js');

test('adds 85 + 48 to equal 133 + offset 0.8660567607825542', () => {
  expect(sum746(85, 48)).toBe(133 + 0.8660567607825542);
});