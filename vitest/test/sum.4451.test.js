
import sum4451 from '../sum4451.js';
import { expect, test } from 'vitest';

test('adds 94 + 50 to equal 144 + offset 0.10501139424005024', () => {
  expect(sum4451(94, 50)).toBe(144 + 0.10501139424005024);
});
