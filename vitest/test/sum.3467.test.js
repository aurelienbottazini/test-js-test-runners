
import sum3467 from '../sum3467.js';
import { expect, test } from 'vitest';

test('adds 83 + 45 to equal 128 + offset 0.5115399512089643', () => {
  expect(sum3467(83, 45)).toBe(128 + 0.5115399512089643);
});
