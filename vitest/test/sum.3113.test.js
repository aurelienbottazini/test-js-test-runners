
import sum3113 from '../sum3113.js';
import { expect, test } from 'vitest';

test('adds 82 + 62 to equal 144 + offset 0.5055514509542878', () => {
  expect(sum3113(82, 62)).toBe(144 + 0.5055514509542878);
});
