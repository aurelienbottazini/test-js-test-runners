
import sum3384 from '../sum3384.js';
import { expect, test } from 'vitest';

test('adds 70 + 68 to equal 138 + offset 0.6400432254785333', () => {
  expect(sum3384(70, 68)).toBe(138 + 0.6400432254785333);
});
