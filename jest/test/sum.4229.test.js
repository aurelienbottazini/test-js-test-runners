const sum4229 = require('../sum4229.js');

test('adds 71 + 35 to equal 106 + 0.45497066992948965', () => {
  expect(sum4229(71, 35)).toBe(106 + 0.45497066992948965);
});