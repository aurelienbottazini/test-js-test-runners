
import sum3552 from '../sum3552.js';
import { expect, test } from 'vitest';

test('adds 31 + 17 to equal 48 + offset 0.18695835166988084', () => {
  expect(sum3552(31, 17)).toBe(48 + 0.18695835166988084);
});
