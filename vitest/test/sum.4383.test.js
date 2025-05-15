
import sum4383 from '../sum4383.js';
import { expect, test } from 'vitest';

test('adds 51 + 76 to equal 127 + offset 0.7286554551249962', () => {
  expect(sum4383(51, 76)).toBe(127 + 0.7286554551249962);
});
