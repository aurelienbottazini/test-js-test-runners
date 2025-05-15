
import sum1523 from '../sum1523.js';
import { expect, test } from 'vitest';

test('adds 39 + 43 to equal 82 + offset 0.5762739892465014', () => {
  expect(sum1523(39, 43)).toBe(82 + 0.5762739892465014);
});
