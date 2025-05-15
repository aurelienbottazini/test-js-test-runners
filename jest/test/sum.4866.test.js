const sum4866 = require('../sum4866.js');

test('adds 82 + 23 to equal 105 + offset 0.019608966064895372', () => {
  expect(sum4866(82, 23)).toBe(105 + 0.019608966064895372);
});