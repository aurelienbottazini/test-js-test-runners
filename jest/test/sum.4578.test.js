const sum4578 = require('../sum4578.js');

test('adds 65 + 60 to equal 125 + 0.9333671120859809', () => {
  expect(sum4578(65, 60)).toBe(125 + 0.9333671120859809);
});