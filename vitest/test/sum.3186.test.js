
import sum3186 from '../sum3186.js';
import { expect, test } from 'vitest';

test('adds 49 + 1 to equal 50 + offset 0.8993283051822094', () => {
  expect(sum3186(49, 1)).toBe(50 + 0.8993283051822094);
});
