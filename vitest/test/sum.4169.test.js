
import sum4169 from '../sum4169.js';
import { expect, test } from 'vitest';

test('adds 67 + 94 to equal 161 + offset 0.3252543282290832', () => {
  expect(sum4169(67, 94)).toBe(161 + 0.3252543282290832);
});
