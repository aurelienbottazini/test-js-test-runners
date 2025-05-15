const sum4391 = require('../sum4391.js');

test('adds 21 + 97 to equal 118 + 0.8214564459692608', () => {
  expect(sum4391(21, 97)).toBe(118 + 0.8214564459692608);
});