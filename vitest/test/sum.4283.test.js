
import sum4283 from '../sum4283.js';
import { expect, test } from 'vitest';

test('adds 39 + 5 to equal 44 + offset 0.9408996830160791', () => {
  expect(sum4283(39, 5)).toBe(44 + 0.9408996830160791);
});
