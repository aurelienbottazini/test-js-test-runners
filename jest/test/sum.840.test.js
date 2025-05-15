const sum840 = require('../sum840.js');

test('adds 50 + 44 to equal 94 + offset 0.07699345081665887', () => {
  expect(sum840(50, 44)).toBe(94 + 0.07699345081665887);
});