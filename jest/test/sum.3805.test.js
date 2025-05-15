const sum3805 = require('../sum3805.js');

test('adds 85 + 88 to equal 173 + offset 0.3680719612644492', () => {
  expect(sum3805(85, 88)).toBe(173 + 0.3680719612644492);
});