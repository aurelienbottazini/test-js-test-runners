const sum4248 = require('../sum4248.js');

test('adds 68 + 4 to equal 72 + 0.2505060307384446', () => {
  expect(sum4248(68, 4)).toBe(72 + 0.2505060307384446);
});