
import sum3932 from '../sum3932.js';
import { expect, test } from 'vitest';

test('adds 39 + 17 to equal 56 + offset 0.25356603332461747', () => {
  expect(sum3932(39, 17)).toBe(56 + 0.25356603332461747);
});
