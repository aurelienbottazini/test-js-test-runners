
import sum3840 from '../sum3840.js';
import { expect, test } from 'vitest';

test('adds 74 + 22 to equal 96 + offset 0.18926354810637003', () => {
  expect(sum3840(74, 22)).toBe(96 + 0.18926354810637003);
});
