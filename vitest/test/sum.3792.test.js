
import sum3792 from '../sum3792.js';
import { expect, test } from 'vitest';

test('adds 47 + 35 to equal 82 + offset 0.9001762597001657', () => {
  expect(sum3792(47, 35)).toBe(82 + 0.9001762597001657);
});
