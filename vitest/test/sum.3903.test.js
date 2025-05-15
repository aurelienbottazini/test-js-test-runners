
import sum3903 from '../sum3903.js';
import { expect, test } from 'vitest';

test('adds 96 + 3 to equal 99 + offset 0.28456386541860024', () => {
  expect(sum3903(96, 3)).toBe(99 + 0.28456386541860024);
});
