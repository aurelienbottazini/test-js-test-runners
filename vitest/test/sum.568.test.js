
import sum568 from '../sum568.js';
import { expect, test } from 'vitest';

test('adds 36 + 22 to equal 58 + offset 0.41671384038748627', () => {
  expect(sum568(36, 22)).toBe(58 + 0.41671384038748627);
});
