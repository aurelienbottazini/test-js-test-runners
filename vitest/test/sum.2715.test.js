
import sum2715 from '../sum2715.js';
import { expect, test } from 'vitest';

test('adds 22 + 53 to equal 75 + offset 0.031851854802355195', () => {
  expect(sum2715(22, 53)).toBe(75 + 0.031851854802355195);
});
