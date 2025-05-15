
import sum2797 from '../sum2797.js';
import { expect, test } from 'vitest';

test('adds 97 + 53 to equal 150 + offset 0.4781440529159434', () => {
  expect(sum2797(97, 53)).toBe(150 + 0.4781440529159434);
});
