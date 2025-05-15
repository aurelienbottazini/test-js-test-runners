
import sum4764 from '../sum4764.js';
import { expect, test } from 'vitest';

test('adds 70 + 68 to equal 138 + offset 0.20732238442401407', () => {
  expect(sum4764(70, 68)).toBe(138 + 0.20732238442401407);
});
