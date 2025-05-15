const sum4171 = require('../sum4171.js');

test('adds 87 + 60 to equal 147 + offset 0.4298778960874374', () => {
  expect(sum4171(87, 60)).toBe(147 + 0.4298778960874374);
});