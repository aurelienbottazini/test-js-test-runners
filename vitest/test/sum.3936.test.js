
import sum3936 from '../sum3936.js';
import { expect, test } from 'vitest';

test('adds 88 + 50 to equal 138 + offset 0.36736920297260967', () => {
  expect(sum3936(88, 50)).toBe(138 + 0.36736920297260967);
});
