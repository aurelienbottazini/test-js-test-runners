const sum1772 = require('../sum1772.js');

test('adds 48 + 43 to equal 91 + offset 0.3739025938218199', () => {
  expect(sum1772(48, 43)).toBe(91 + 0.3739025938218199);
});