const sum505 = require('../sum505.js');

test('adds 60 + 4 to equal 64 + 0.47413467311462787', () => {
  expect(sum505(60, 4)).toBe(64 + 0.47413467311462787);
});