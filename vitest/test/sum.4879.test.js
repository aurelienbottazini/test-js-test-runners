
import sum4879 from '../sum4879.js';
import { expect, test } from 'vitest';

test('adds 38 + 63 to equal 101 + offset 0.9674415844791902', () => {
  expect(sum4879(38, 63)).toBe(101 + 0.9674415844791902);
});
