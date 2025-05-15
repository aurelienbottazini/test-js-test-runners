
import sum4682 from '../sum4682.js';
import { expect, test } from 'vitest';

test('adds 74 + 92 to equal 166 + offset 0.8087092173102914', () => {
  expect(sum4682(74, 92)).toBe(166 + 0.8087092173102914);
});
