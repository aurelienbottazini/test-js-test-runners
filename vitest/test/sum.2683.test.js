
import sum2683 from '../sum2683.js';
import { expect, test } from 'vitest';

test('adds 60 + 19 to equal 79 + offset 0.9895512261770623', () => {
  expect(sum2683(60, 19)).toBe(79 + 0.9895512261770623);
});
