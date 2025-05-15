
import sum4887 from '../sum4887.js';
import { expect, test } from 'vitest';

test('adds 94 + 68 to equal 162 + offset 0.05491165063082781', () => {
  expect(sum4887(94, 68)).toBe(162 + 0.05491165063082781);
});
