const sum4288 = require('../sum4288.js');

test('adds 43 + 36 to equal 79 + offset 0.6941129577096075', () => {
  expect(sum4288(43, 36)).toBe(79 + 0.6941129577096075);
});