const sum4603 = require('../sum4603.js');

test('adds 44 + 3 to equal 47 + 0.7185573349419002', () => {
  expect(sum4603(44, 3)).toBe(47 + 0.7185573349419002);
});