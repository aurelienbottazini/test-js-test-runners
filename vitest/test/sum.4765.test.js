
import sum4765 from '../sum4765.js';
import { expect, test } from 'vitest';

test('adds 47 + 82 to equal 129 + offset 0.26640247285533414', () => {
  expect(sum4765(47, 82)).toBe(129 + 0.26640247285533414);
});
