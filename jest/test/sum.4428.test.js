const sum4428 = require('../sum4428.js');

test('adds 82 + 89 to equal 171 + 0.9378406740692372', () => {
  expect(sum4428(82, 89)).toBe(171 + 0.9378406740692372);
});