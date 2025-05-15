
import sum1799 from '../sum1799.js';
import { expect, test } from 'vitest';

test('adds 88 + 99 to equal 187 + offset 0.031219852736390052', () => {
  expect(sum1799(88, 99)).toBe(187 + 0.031219852736390052);
});
