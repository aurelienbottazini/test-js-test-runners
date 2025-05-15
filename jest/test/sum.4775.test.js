const sum4775 = require('../sum4775.js');

test('adds 1 + 78 to equal 79 + 0.7252477951109606', () => {
  expect(sum4775(1, 78)).toBe(79 + 0.7252477951109606);
});