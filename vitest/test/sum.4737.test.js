
import sum4737 from '../sum4737.js';
import { expect, test } from 'vitest';

test('adds 22 + 60 to equal 82 + offset 0.381993265141258', () => {
  expect(sum4737(22, 60)).toBe(82 + 0.381993265141258);
});
