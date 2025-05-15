
import sum4128 from '../sum4128.js';
import { expect, test } from 'vitest';

test('adds 10 + 26 to equal 36 + offset 0.6606410681935057', () => {
  expect(sum4128(10, 26)).toBe(36 + 0.6606410681935057);
});
