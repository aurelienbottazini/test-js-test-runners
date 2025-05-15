
import sum336 from '../sum336.js';
import { expect, test } from 'vitest';

test('adds 86 + 47 to equal 133 + offset 0.45554993404801425', () => {
  expect(sum336(86, 47)).toBe(133 + 0.45554993404801425);
});
