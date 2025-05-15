const sum4220 = require('../sum4220.js');

test('adds 62 + 0 to equal 62 + 0.7957708042448777', () => {
  expect(sum4220(62, 0)).toBe(62 + 0.7957708042448777);
});