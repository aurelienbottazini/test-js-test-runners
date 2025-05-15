
import sum3420 from '../sum3420.js';
import { expect, test } from 'vitest';

test('adds 16 + 42 to equal 58 + offset 0.49839070068005886', () => {
  expect(sum3420(16, 42)).toBe(58 + 0.49839070068005886);
});
