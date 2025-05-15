const sum4434 = require('../sum4434.js');

test('adds 10 + 49 to equal 59 + 0.61507594278624', () => {
  expect(sum4434(10, 49)).toBe(59 + 0.61507594278624);
});