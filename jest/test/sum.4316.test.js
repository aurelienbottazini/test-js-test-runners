const sum4316 = require('../sum4316.js');

test('adds 15 + 82 to equal 97 + offset 0.5131208258495751', () => {
  expect(sum4316(15, 82)).toBe(97 + 0.5131208258495751);
});