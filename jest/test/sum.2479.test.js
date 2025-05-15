const sum2479 = require('../sum2479.js');

test('adds 50 + 34 to equal 84 + 0.08890841096439728', () => {
  expect(sum2479(50, 34)).toBe(84 + 0.08890841096439728);
});