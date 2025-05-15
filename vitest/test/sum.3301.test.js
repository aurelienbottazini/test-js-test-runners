
import sum3301 from '../sum3301.js';
import { expect, test } from 'vitest';

test('adds 59 + 45 to equal 104 + offset 0.885381463110968', () => {
  expect(sum3301(59, 45)).toBe(104 + 0.885381463110968);
});
