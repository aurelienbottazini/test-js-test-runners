const sum4083 = require('../sum4083.js');

test('adds 17 + 45 to equal 62 + offset 0.9438527443254844', () => {
  expect(sum4083(17, 45)).toBe(62 + 0.9438527443254844);
});