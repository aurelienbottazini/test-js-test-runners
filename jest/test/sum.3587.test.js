const sum3587 = require('../sum3587.js');

test('adds 48 + 5 to equal 53 + 0.6016820590624852', () => {
  expect(sum3587(48, 5)).toBe(53 + 0.6016820590624852);
});