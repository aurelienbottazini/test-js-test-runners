const sum4856 = require('../sum4856.js');

test('adds 0 + 88 to equal 88 + 0.48313410246158683', () => {
  expect(sum4856(0, 88)).toBe(88 + 0.48313410246158683);
});