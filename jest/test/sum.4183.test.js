const sum4183 = require('../sum4183.js');

test('adds 91 + 0 to equal 91 + offset 0.8184258013052482', () => {
  expect(sum4183(91, 0)).toBe(91 + 0.8184258013052482);
});